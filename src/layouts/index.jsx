import { Link, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

import { Button } from '../components/Button';
import { Snackbar } from '../components/Snackbar';
import { ExternalLink } from '../components/ExternalLink';
import { useLayout } from './useLayout';

export const AppLayout = () => {
    const {
        searching,
        headerColor,
        user,
        isCustomLayout,
        methods: { handleAuth, handleFavorites },
        snackbar: { show, type, message },
        headerRef,
    } = useLayout();

    return (
        <div className={styles.container}>
            {searching && <div className={styles.overlay} />}
            <header ref={headerRef} className={classNames(styles.header, styles[`header--${headerColor}`])}>
                <Link className={styles.header__logo} to="/famouser">Famouser</Link>
                <div className={styles.header__cta}>
                    {user && <Button className={styles.header__button} style='danger' onClick={handleFavorites}>Favorites</Button>}
                    {!isCustomLayout && <Button className={styles.header__button} onClick={handleAuth}>{user ? 'Log out' : 'Log in'}</Button>}
                </div>
            </header>
            <section className={styles.body}>
                <Outlet />
            </section>
            {!isCustomLayout && <section className={styles.footer}>
                <hr className={styles.footer__divider} />
                <span>
                    Famouser was created with 💓 by <ExternalLink href="https://github.com/agustingorgni">Agustin Gorgni</ExternalLink>
                </span>
            </section>}
            <Snackbar show={show} type={type} message={message} />
        </div>
    );
}
