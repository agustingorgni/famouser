import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import styles from './styles.module.scss';

import { auth } from '../../firebase';
import { IS_CUSTOM_LAYOUT } from '../utils/enums/layouts';
import { useFamouserState } from '../hooks/useFamouserState';
import { useAuth } from '../hooks/useAuth';
import { deleteFavorites } from '../utils/functions/favorites';
import { AppLayoutView } from './AppLayoutView';

export default function AppLayout() {
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

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

    const handleAuth = () => {
        if (user) {
            signOut(auth).then(() => {
                deleteFavorites();
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
    const { state: { snackbar } } = useFamouserState();

    const searching = navigation.location ? true : false;

    const headerColor = IS_CUSTOM_LAYOUT[pathname] ? 'white' : 'lightblue';
    const isCustomLayout = IS_CUSTOM_LAYOUT[pathname];

    const mappedProps = {
        searching,
        headerColor,
        isCustomLayout,
        user,
        snackbar,
        methods: {
            handleFavorites,
            handleAuth,
        },
    };

    return <AppLayoutView ref={headerRef} {...mappedProps} />;
}
