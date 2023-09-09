import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { ExternalLink } from '../components/ExternalLink';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { Button } from '../components/Button';
import { IS_CUSTOM_LAYOUT } from '../utils/enums/layouts';

export default function AppLayout() {
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const [userLogged, setUserLogged] = useState(false);

    const handleScroll = () => {
        const scrollOffset = window.scrollY;

        if (headerRef.current) {
            if (scrollOffset >= 100) {
                headerRef.current.classList.add(`${styles['header--fixed']}`);
            } else {
                headerRef.current.classList.remove(`${styles['header--fixed']}`);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // TODO: Ver si se puede llevar al loader
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.uid);
                setUserLogged(true);
            } else {
                setUserLogged(false);
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleAuth = () => {
        if (userLogged) {
            signOut(auth).then(() => {
                navigate('/famouser/');
            }).catch((error) => {
                console.log(error.message)
            });
        } else {
            navigate('/famouser/login');
        }
    };

    const handleFavorites = () => {
        navigate('/famouser/favorites');
    };

    const navigation = useNavigation();
    const { pathname } = useLocation();

    const searching = navigation.location ? true : false;

    const HEADER_COLOR = IS_CUSTOM_LAYOUT[pathname] ? 'white' : 'lightblue';

    return (
        <div className={styles.container}>
            {searching && <div className={styles.overlay} />}
            <header ref={headerRef} className={classNames(styles.header, styles[`header--${HEADER_COLOR}`])}>
                <Link to="/famouser">Famouser</Link>
                <div className={styles.header__cta}>
                    {userLogged && <Button style='danger' onClick={handleFavorites}>Favorites</Button>}
                    {!IS_CUSTOM_LAYOUT[pathname] && <Button onClick={handleAuth}>{userLogged ? 'Log out' : 'Log in'}</Button>}
                </div>
            </header>
            <section className={styles.body}>
                <Outlet />
            </section>
            {!IS_CUSTOM_LAYOUT[pathname] && <section className={styles.footer}>
                <hr className={styles.footer__divider} />
                <span>Famouser was created with 💓by <ExternalLink href="https://github.com/agustingorgni">Agustin Gorgni</ExternalLink></span>
            </section>}
        </div>
    );
}
