import { Form, NavLink, useActionData } from 'react-router-dom';

import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';

const Login = () => {
    const data = useActionData();

    return (
        <section className={styles.login}>
            <div className={styles.login__container}>
                <Form className={styles.login__form} method='post'>
                    <Input className={styles.login__input} placeholder='Your e-mail' name='email' type='text' />
                    <Input className={styles.login__input} placeholder='Your password' name='password' type='password' />
                    <Button className={styles.login__button} type='submit'>Login</Button>
                </Form>

                {data?.error && <p className={styles.login__message}>{data.message}</p>}

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
