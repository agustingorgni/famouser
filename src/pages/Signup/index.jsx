import { useState } from 'react';
import { Form, NavLink, useActionData, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../firebase';
import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
// TODO: APLICAR REDUCER CON DISPATCH PARA IMPLEMENTAR UN SNACKBAR EN LUGAR DE IMPRIMIR EL MENSAJE DE ERROR
const Signup = () => {
    const data = useActionData();

    return (
        <section className={styles.signup}>
            <div className={styles.signup__container}>
                <Form className={styles.signup__form} method='post'>
                    <Input className={styles.signup__input} placeholder='Your e-mail' name='email' type='text' />
                    <Input className={styles.signup__input} placeholder='Your password' name='password' type='password' />
                    <Button className={styles.signup__button} type='submit'>Sign up</Button>
                </Form>
                <Divider className={styles.signup__divider} />
                {data?.error && <p className={styles.signup__message}>{data.message}</p>}
                <p>
                    Already have an account? {' '}
                    <NavLink to="/famouser/login">
                        Login
                    </NavLink>
                </p>
            </div>
        </section>
    )
}

export default Signup