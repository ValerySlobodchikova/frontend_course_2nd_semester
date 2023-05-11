import React, {useEffect} from 'react';
import styles from '../index.module.sass'
import {LButton} from '../../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
import {goToAuthBase, goToAuthPartners} from "../../../../store/authModalSlice";
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {RegisterBody, RegisterResponse} from "../../../../models/profile.model";
import {useRegistrationMutation} from "../../../../store/auth";


export const RegisterModal = () => {
    const dispatch = useDispatch()

    const [register, {data, isLoading, isSuccess}] = useRegistrationMutation();

    useEffect(() => {
        if (data && isSuccess) {
            dispatch(goToAuthBase())
        }
        console.log(data)
    }, [data, isSuccess]);

    const handleRegister = (formData: RegisterBody) => {
        register(formData);
    };

    return (

        <div className={styles.registrationModal}>
            <Formik
                <RegisterBody>
                initialValues={{
                    email: '',
                    phone_number: '',
                    password: '',
                    balance: '',
                }}
                onSubmit={handleRegister}
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
                                placeholder="Email"
                                type="text"
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </label>
                        <label className={styles.input}>
                            <input
                                placeholder="Номер телефона"
                                type="text"
                                name='phone_number'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone_number}
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
                        <label className={styles.input}>
                            <input
                                placeholder="Баланс"
                                type="text"
                                name='balance'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.balance}
                            />
                        </label>
                        <LButton disabled={isLoading} type='submit' className={styles.signIn}
                                 colorTheme="green">Зарегистрироваться</LButton>

                    </form>
                )}
            </Formik>


            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Я уже
                    зарегистировался(-ась)
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} className={styles.signIn} colorTheme="gray">Вход
                для партнеров</LButton>
        </div>
    )
}
