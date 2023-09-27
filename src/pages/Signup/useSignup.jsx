import { useEffect } from 'react';
import { useActionData } from 'react-router-dom';

import { useFamouserState } from '../../hooks/useFamouserState';
import { SHOW_SNACKBAR } from '../../utils/enums/actions';
import { ERROR } from '../../utils/enums/statuses';
import { hideSnackbar } from '../../utils/functions/hideSnackbar';

export const useSignup = () => {
    const data = useActionData();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (data?.status === ERROR) {
            dispatch({ type: SHOW_SNACKBAR, payload: { type: ERROR, message: data.message } });
            hideSnackbar(dispatch);
        }
    }, [data, dispatch]);
};
