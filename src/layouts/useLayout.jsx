import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import styles from './styles.module.scss';

import { auth } from '../../firebase';
import { IS_CUSTOM_LAYOUT } from '../utils/enums/layouts';
import { useFamouserState } from '../hooks/useFamouserState';
import { useAuth } from '../hooks/useAuth';
import { deleteFavorites } from '../utils/functions/favorites';
import { SHOW_SNACKBAR } from '../utils/enums/actions';
import { ERROR } from '../utils/enums/statuses';
import { hideSnackbar } from '../utils/functions/hideSnackbar';
import { FAVORITES, INDEX, LOGIN } from '../utils/enums/links';

export const useLayout = () => {
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const { user } = useAuth();
    const { dispatch } = useFamouserState();

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

    const handleAuth = async () => {
        if (user) {
            try {
                await signOut(auth);
                deleteFavorites();
                navigate(INDEX);
            } catch (e) {
                dispatch({ type: SHOW_SNACKBAR, payload: { type: ERROR, message: 'Error trying to logging out' } });
                hideSnackbar(dispatch);
            }
        } else {
            navigate(LOGIN);
        }
    };

    const handleFavorites = () => {
        navigate(FAVORITES);
    };

    const navigation = useNavigation();
    const { pathname } = useLocation();
    const { state: { snackbar } } = useFamouserState();

    const searching = navigation.location ? true : false;

    const headerColor = IS_CUSTOM_LAYOUT[pathname] ? 'white' : 'lightblue';
    const isCustomLayout = IS_CUSTOM_LAYOUT[pathname];

    return {
        searching,
        headerColor,
        isCustomLayout,
        user,
        snackbar,
        headerRef,
        methods: {
            handleFavorites,
            handleAuth,
        },
    };
};
