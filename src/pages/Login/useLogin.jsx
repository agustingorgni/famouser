import { useActionData, useNavigate, useSearchParams } from 'react-router-dom';

import { useFamouserState } from '../../hooks/useFamouserState';
import { useEffect } from 'react';
import { SHOW_SNACKBAR } from '../../utils/enums/actions';
import { ERROR, OK } from '../../utils/enums/statuses';
import { hideSnackbar } from '../../utils/functions/hideSnackbar';

export const useLogin = () => {
    const data = useActionData();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (!data) return;

        const { status, message, redirect } = data;

        if (status !== OK) {
            dispatch({ type: SHOW_SNACKBAR, payload: { type: ERROR, message: message } });
            hideSnackbar(dispatch);
        } else {
            navigate(searchParams.get('callback') ? searchParams.get('callback') : redirect);
        }
    }, [data, dispatch, navigate, searchParams]);
};
