import { Form, NavLink, useActionData } from 'react-router-dom';

import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
import { useFamouserState } from '../../hooks/useFamouserState';
import { useEffect } from 'react';
import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../../utils/enums/actions';

const Login = () => {
    const data = useActionData();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (data?.error) {
            dispatch({ type: SHOW_SNACKBAR, payload: { type: 'error', message: data.message } });
            setTimeout(() => {
                dispatch({ type: HIDE_SNACKBAR })
            }, 3000)
        }
    }, [data, dispatch]);

    return (
        <section className={styles.login}>
            <div className={styles.login__image}>
                <img src='/famouser/img/login.jpg' alt="login cover" height="100%" width="100%" loading='lazy' />
            </div>
            <div className={styles.login__content}>
                <h2 className={styles.login__title}>Welcome back!</h2>
                <Form className={styles.form} method='post'>
                    <Input style='outline' className={styles.login__input} placeholder='Your e-mail' name='email' type='text' />
                    <Input style='outline' className={styles.login__input} placeholder='Your password' name='password' type='password' />
                    <Button style='danger' className={styles.login__button} type='submit'>Login</Button>
                </Form>
                <Divider className={styles.login__divider} />
                <p>
                    No account yet? {' '}
                    <NavLink to="/famouser/signup">
                        Sign up
                    </NavLink>
                </p>
            </div>
        </section>
    )
}

export {
    Login,
}
