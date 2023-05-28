import React, {useEffect} from 'react';
import styles from '../index.module.sass'
import {LButton, Theme} from '../../../LongButtonComponent';
import {goToAuthBase, goToAuthPartners} from "../../../../../store/authModalSlice";
import {useDispatch} from "react-redux";
import {Field, Formik} from "formik";
import {RegisterBody, RegisterResponse} from "../../../../../models/profile.model";
import {useRegistrationMutation} from "../../../../../store/auth";
import * as yup from "yup";


const validationSchema = yup.object({
    email: yup.string().email().required(),
    phone_number: yup.string().min(10).required(),
    password: yup.string().min(4).required().matches(/^(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру'),
    balance: yup.string().required()
})

export const RegisterModal = () => {
    const dispatch = useDispatch()

    const [register, {data, isLoading, isSuccess}] = useRegistrationMutation();

    useEffect(() => {
        if (data && isSuccess) {
            dispatch(goToAuthBase())
        }
    }, [data, isSuccess]);

    const handleRegister = (formData: RegisterBody) => {
        register(formData);
    };

    return (

        <div className={styles.modal}>
            <Formik
                <RegisterBody>
                initialValues={{
                    email: '',
                    phone_number: '',
                    password: '',
                    balance: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
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
                                id="email"
                                placeholder="Email"
                                type="text"
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </label>
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                        <label className={styles.input}>
                            <Field
                                id="phone_number"
                                placeholder="Номер телефона"
                                type="text"
                                name='phone_number'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone_number}
                            />
                        </label>
                        {errors.phone_number && <span className={styles.error}>{errors.phone_number}</span>}
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
                        <label className={styles.input}>
                            <Field
                                id="balance"
                                placeholder="Баланс"
                                type="text"
                                name='balance'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.balance}
                            />
                        </label>
                        {errors.balance && <span className={styles.error}>{errors.balance}</span>}
                        <LButton disabled={isLoading} type='submit' width={384} height={56}
                                 theme={Theme.GREEN}>Зарегистрироваться</LButton>

                    </form>
                )}
            </Formik>


            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Я уже
                    зарегистировался(-ась)
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} width={384} height={56} theme={Theme.GRAY}>Вход
                для партнеров</LButton>
        </div>
    )
}
