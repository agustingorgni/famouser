import { Form, Link, Outlet, useLoaderData } from 'react-router-dom';

import styles from './styles.module.scss';
import { Input } from '../components/Input';

export default function AppLayout() {
    const query = useLoaderData();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles['header__logo-container']}>
                    <Link to="/">
                        <img src="/img/logo.png" height={40} alt='famouser logo' />
                    </Link>
                    <h1 className={styles.header__title}>Famouser</h1>
                </div>
                <div className={styles.header__searchbox}>
                    <Form action='stars'>
                        <div className={styles['input-container']}>
                            <Input name="q" className={styles['input-container__input']} type="string" defaultValue={query} />
                            <button className={styles['input-container__button']} type='submit'>&#x1F50D;</button>
                        </div>
                    </Form>
                </div>
            </header>
            <section id="body" className={styles.body}>
                <div className={styles.divider} />
                <Outlet />
            </section>
            <section id="footer" className={styles.footer}>
                Famouser was created with 💓by agorgni
            </section>
        </div>
    )
}
