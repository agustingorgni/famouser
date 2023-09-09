import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const FamouserContext = createContext();

export const FamouserProvider = ({ children }) => {
    const reducer = (state, action) => {
        const { type, payload } = action;

        switch (type) {
            case 'CHANGE_HEADER_VISIBILITY': {
                return { ...state, header_visible: payload };
            }
            default: {
                return state;
            }
        }
    };

    const initialState = {
        header_visible: true,
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
