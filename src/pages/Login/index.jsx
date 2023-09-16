import { useActionData, useNavigate } from 'react-router-dom';

import { useFamouserState } from '../../hooks/useFamouserState';
import { useEffect } from 'react';
import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../../utils/enums/actions';
import { storeFavorites } from '../../utils/functions/favorites';
import { LoginView } from './view';

const Login = () => {
    const data = useActionData();
    const navigate = useNavigate();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (data) {
            if (data.response !== 'ok') {
                dispatch({ type: SHOW_SNACKBAR, payload: { type: 'error', message: data.message } });
                setTimeout(() => {
                    dispatch({ type: HIDE_SNACKBAR })
                }, 3000)
            } else {
                storeFavorites(data.user);
                navigate(data.redirect)
            }
        }
    }, [data, dispatch, navigate]);

    return <LoginView />;
}

export {
    Login,
}
