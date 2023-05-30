import React, {useEffect} from 'react';
import styles from '../index.module.sass'
import {LButton, Theme} from '../../../LongButtonComponent';
import {goToAuthPartners, goToAuthWithSms, goToRegister} from "../../../../../store/authModalSlice";
import {useDispatch} from "react-redux";
import {Field, Formik} from "formik";
import {AuthenticationRequest} from "../../../../../models/generated";
import {useAuthorizationMutation, useLazyGetProfileQuery} from "../../../../../store/auth";
import {setBalance, setEmail, setToken} from "../../../../../store/profileInfo";
import * as yup from 'yup'

const validationSchema = yup.object({
    login: yup.string().required(),
    password: yup.string().required()
})

export const AuthBaseModal = () => {
    const dispatch = useDispatch()

    const [login, {data, isLoading, isSuccess, isError}] = useAuthorizationMutation();
    const [getProfile] = useLazyGetProfileQuery()

    function setProfileInfo(balance: number | undefined, email: string | undefined) {
        dispatch(setBalance(balance))
        dispatch(setEmail(email))
    }

    const handleLogin = (formData: AuthenticationRequest) => {
        login(formData)
            .then(res => {

                if ('data' in res) {
                    let token = res?.data?.token as string

                    dispatch(setToken(token));
                    return res;
                }
            })
            .then(() => getProfile(null).then(prom => setProfileInfo(prom?.data?.balance, prom?.data?.email))

            );
    };
    // оставлю на всякий случай :)
    // useEffect(() => {
    //     if (isSuccess) {
    //         localStorage.setItem('token', data?.token as string)
    //         getProfile(null)
    //             .then(promise => promise.data)
    //             .then(body => setProfileInfo(body?.balance, body?.email))
    //
    //     }
    // }, [isSuccess])
    //
    //
    // const handleLogin = (formData: AuthenticationRequest) => {
    //     login(formData);
    // };

    return (
        <div className={styles.modal}>
            <Formik
                <AuthenticationRequest>
                initialValues={{
                    login: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      errors
                  }) => (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label className={styles.input}>
                            <Field
                                id="login"
                                placeholder="Логин"
                                type="text"
                                name='login'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.login}
                            />

                        </label>
                        {errors.login && <span className={styles.error}>{errors.login}</span>}
                        <label className={styles.input}>
                            <Field
                                id="password"
                                placeholder="Пароль"
                                type="password"
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </label>
                        {errors.password && <span className={styles.error}>{errors.password}</span>}
                        {isError && !errors.login && !errors.password &&
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
