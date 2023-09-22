import { useActionData } from 'react-router-dom';
import React from 'react';

import { useEffect } from 'react';
import { useFamouserState } from '../../hooks/useFamouserState';
import { SHOW_SNACKBAR } from '../../utils/enums/actions';
import { SignupView } from './view';
import { ERROR } from '../../utils/enums/statuses';
import { hideSnackbar } from '../../utils/functions/hideSnackbar';

const Signup = () => {
    const data = useActionData();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        if (data?.status === ERROR) {
            dispatch({ type: SHOW_SNACKBAR, payload: { type: ERROR, message: data.message } });
            hideSnackbar(dispatch);
        }
    }, [data, dispatch]);

    return <SignupView />;
}

export default Signup;
