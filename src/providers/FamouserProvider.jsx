import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../utils/enums/actions';

export const FamouserContext = createContext();

export const FamouserProvider = ({ children }) => {
    const initialState = {
        snackbar: {
            show: false,
            text: null,
            type: null
        },
    };

    const reducer = (state, action) => {
        const { type, payload } = action;

        switch (type) {
            case SHOW_SNACKBAR: {
                return { ...state, snackbar: { show: true, ...payload } };
            }
            case HIDE_SNACKBAR: {
                return {
                    ...state,
                    snackbar: initialState.snackbar,
                }
            }
            default: {
                return state;
            }
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FamouserContext.Provider value={{ state, dispatch }}>
            {children}
        </FamouserContext.Provider>
    );
};

FamouserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
