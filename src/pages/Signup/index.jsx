import { useActionData } from 'react-router-dom';

import { useEffect } from 'react';
import { useFamouserState } from '../../hooks/useFamouserState';
import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../../utils/enums/actions';
import { SignupView } from './view';

const Signup = () => {
    const data = useActionData();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (data?.error) {
            dispatch({ type: SHOW_SNACKBAR, payload: { type: 'error', message: data.message } });
            setTimeout(() => {
                dispatch({ type: HIDE_SNACKBAR })
            }, 3000)
        }
    }, [data, dispatch]);

    return <SignupView />;
}

export default Signup