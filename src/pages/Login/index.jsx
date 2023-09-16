import { useActionData, useNavigate, useSearchParams } from 'react-router-dom';

import { useFamouserState } from '../../hooks/useFamouserState';
import { useEffect } from 'react';
import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../../utils/enums/actions';
import { LoginView } from './view';

const Login = () => {
    const data = useActionData();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (data) {
            if (data.response !== 'ok') {
                dispatch({ type: SHOW_SNACKBAR, payload: { type: 'error', message: data.message } });
                setTimeout(() => {
                    dispatch({ type: HIDE_SNACKBAR });
                }, 3000);
            } else {
                if (searchParams.get('callback')) {
                    navigate(searchParams.get('callback'));
                } else {
                    navigate(data.redirect);
                }
            }
        }
    }, [data, dispatch, navigate, searchParams]);

    return <LoginView />;
}

export {
    Login,
}
