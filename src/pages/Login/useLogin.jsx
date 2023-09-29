import { useActionData, useNavigate, useSearchParams } from 'react-router-dom';

import { useFamouserState } from '../../hooks/useFamouserState';
import { useEffect, useState } from 'react';
import { SHOW_SNACKBAR } from '../../utils/enums/actions';
import { ERROR, OK } from '../../utils/enums/statuses';
import { hideSnackbar } from '../../utils/functions/hideSnackbar';
import { INDEX } from '../../utils/enums/links';

export const useLogin = () => {
    const data = useActionData();
    const navigate = useNavigate();
    const [showResetForm, setShowResetForm] = useState(false);
    const [searchParams] = useSearchParams();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (!data) return;

        const { status, message, redirect } = data;

        if (status !== OK) {
            dispatch({ type: SHOW_SNACKBAR, payload: { type: ERROR, message: message } });
            hideSnackbar(dispatch);
        } else {
            if (message) {
                dispatch({ type: SHOW_SNACKBAR, payload: { type: 'success', message: message } });
                hideSnackbar(dispatch);
                navigate(INDEX);
            } else {
                navigate(searchParams.get('callback') ? searchParams.get('callback') : redirect);
            }
        }
    }, [data, dispatch, navigate, searchParams]);

    const changeResetFormVisibility = () => {
        setShowResetForm(prev => !prev);
    };

    return {
        changeResetFormVisibility,
        showResetForm,
    }
};
