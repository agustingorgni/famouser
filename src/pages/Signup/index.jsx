import { Form, NavLink, useActionData } from 'react-router-dom';

import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';

const Signup = () => {
    const data = useActionData();

    return (
        <section className={styles.signup}>
            <div className={styles.signup__image}>
                <img src='/famouser/img/login.jpg' alt="signup cover" height="100%" width="100%" loading='lazy' />
            </div>
            <div className={styles.signup__content}>
                <h2 className={styles.signup__title}>Join us!</h2>
                <Form className={styles.form} method='post'>
                    <Input style='outline' className={styles.signup__input} placeholder='Your e-mail' name='email' type='text' />
                    <Input style='outline' className={styles.signup__input} placeholder='Your password' name='password' type='password' />
                    <Button style='danger' className={styles.signup__button} type='submit'>Sign up</Button>
                </Form>
                {data?.error && <p className={styles.signup__message}>{data.message}</p>}
                <Divider className={styles.signup__divider} />
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