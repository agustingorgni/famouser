import { forwardRef } from "react";
import { Link, Outlet } from "react-router-dom";
import classNames from "classnames";
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import { Button } from "../components/Button";
import { Snackbar } from "../components/Snackbar";
import { ExternalLink } from "../components/ExternalLink";

export const AppLayoutView = forwardRef((
    {
        searching,
        headerColor,
        isCustomLayout,
        user,
        snackbar,
        methods: {
            handleFavorites,
            handleAuth
        }
    },
    headerRef) => (
    <div className={styles.container}>
        {searching && <div className={styles.overlay} />}
        <header ref={headerRef} className={classNames(styles.header, styles[`header--${headerColor}`])}>
            <Link to="/famouser">Famouser</Link>
            <div className={styles.header__cta}>
                {user && <Button style='danger' onClick={handleFavorites}>Favorites</Button>}
                {!isCustomLayout && <Button onClick={handleAuth}>{user ? 'Log out' : 'Log in'}</Button>}
            </div>
        </header>
        <section className={styles.body}>
            <Outlet />
        </section>
        {!isCustomLayout && <section className={styles.footer}>
            <hr className={styles.footer__divider} />
            <span>
                Famouser was created with 💓by <ExternalLink href="https://github.com/agustingorgni">Agustin Gorgni</ExternalLink>
            </span>
        </section>}
        <Snackbar show={snackbar.show} type={snackbar.type} message={snackbar.message} />
    </div>
));

AppLayoutView.displayName = 'AppLayoutView';

AppLayoutView.propTypes = {
    searching: PropTypes.bool.isRequired,
    headerColor: PropTypes.string.isRequired,
    isCustomLayout: PropTypes.bool.isRequired,
    user: PropTypes.shape({}).isRequired,
    snackbar: PropTypes.shape({
        show: PropTypes.bool,
        type: PropTypes.string,
        message: PropTypes.string,
    }).isRequired,
    methods: PropTypes.shape({
        handleFavorites: PropTypes.func.isRequired,
        handleAuth: PropTypes.func.isRequired,
    }).isRequired,
};
