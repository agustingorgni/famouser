import { Form, NavLink, useActionData } from 'react-router-dom';

import styles from './styles.module.scss';

const Login = () => {
    const data = useActionData();

    return (
        <section className={styles.login}>
            <div>
                <Form method='post'>
                    <input type='text' name='email' />
                    <input type='password' name='password' />
                    <button type='submit'>Login</button>
                </Form>

                { data?.error && <p>{data.message}</p>}

                <p className="text-sm text-white text-center">
                    No account yet? {' '}
                    <NavLink to="/signup">
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
