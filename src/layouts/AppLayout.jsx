import { Form, Outlet, useLoaderData } from 'react-router-dom';

import styles from './styles.module.scss';

export default function AppLayout() {
    const query = useLoaderData();

    return (
        <>
            <div className={styles.nav}>
                <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" height={20} alt='logo' />
                <Form action='stars'>
                    <input name='q' type='text' defaultValue={query} />
                    <button type='submit'>Search</button>
                </Form>
            </div>
            <div className={styles.body}>
                <Outlet />
            </div>
        </>
    )
}
