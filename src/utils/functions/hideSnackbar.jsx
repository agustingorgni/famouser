import { HIDE_SNACKBAR } from '../enums/actions';

export const hideSnackbar = (dispatch, delay = 3000) => (
    setTimeout(() => {
        dispatch({ type: HIDE_SNACKBAR });
    }, delay)
);
