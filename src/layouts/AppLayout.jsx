import { useEffect, useRef } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';

import styles from './styles.module.scss';
import { ExternalLink } from '../components/ExternalLink';

export default function AppLayout() {
    const headerRef = useRef(null);

    const handleScroll = () => {
        const scrollOffset = window.scrollY;

        if (headerRef.current) {
            if(scrollOffset >= 100) {
                headerRef.current.classList.add(`${styles['header--fixed']}`);
            } else {
                headerRef.current.classList.remove(`${styles['header--fixed']}`);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navigation = useNavigation();
    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q");

    return (
        <div className={styles.container}>
            { searching && <div className={styles.overlay} /> }
            <header ref={headerRef} className={styles.header}>
                <Link to="/famouser">Famouser</Link>
            </header>
            <section className={styles.body}>
                <Outlet />
            </section>
            <section className={styles.footer}>
                <hr className={styles.footer__divider} />
                <span>Famouser was created with 💓by <ExternalLink href="https://github.com/agustingorgni">Agustin Gorgni</ExternalLink></span>
            </section>
        </div>
    );
}
