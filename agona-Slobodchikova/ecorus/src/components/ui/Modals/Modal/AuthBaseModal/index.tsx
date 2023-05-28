import React, {useEffect} from 'react';
import styles from '../index.module.sass'
import {LButton, Theme} from '../../../LongButtonComponent';
import {goToAuthPartners, goToAuthWithSms, goToRegister} from "../../../../../store/authModalSlice";
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {AuthenticationRequest} from "../../../../../models/generated";
import {useAuthorizationMutation, useLazyGetProfileQuery} from "../../../../../store/auth";
import {setBalance, setEmail} from "../../../../../store/profileInfo";

export const AuthBaseModal = () => {
    const dispatch = useDispatch()

    const [login, {data, isLoading, isSuccess, isError}] = useAuthorizationMutation();
    const [getProfile] = useLazyGetProfileQuery()

    function setProfileInfo(balance: number | undefined, email: string | undefined) {
        dispatch(setBalance(balance))
        dispatch(setEmail(email))
    }

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('token', data?.token as string)
            getProfile(null)
                .then(promise => promise.data)
                .then(body => setProfileInfo(body?.balance, body?.email))

        }
    }, [isSuccess])


    const handleLogin = (formData: AuthenticationRequest) => {
        login(formData);
    };
    return (
        <div className={styles.modal}>
            <Formik
                <AuthenticationRequest>
                initialValues={{
                    login: '',
                    password: ''
                }}
                onSubmit={handleLogin}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label className={styles.input}>
                            <input
                                placeholder="Логин"
                                type="text"
                                name='login'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                            />
                        </label>

                        <label className={styles.input}>
                            <input
                                placeholder="Пароль"
                                type="password"
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </label>
                        {isError &&
                            <span className={styles.error}>Неверное имя пользователя или пароль</span>}
                        <LButton disabled={isLoading} type='submit' width={384} height={56}
                                 theme={Theme.GREEN}>Войти</LButton>

                    </form>
                )}
            </Formik>


            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToRegister())} className={styles.textBtn}>Регистрация</button>
                <button onClick={() => dispatch(goToAuthWithSms())} className={styles.textBtn}>Войти с помощью смс
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} theme={Theme.GRAY} width={384} height={56}>Вход
                для партнеров</LButton>
        </div>
    )
}
