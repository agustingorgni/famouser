import PropTypes from 'prop-types';
import { Children } from "react";
import React from 'react';

import { Row } from './Row';

export const Body = ({ children }) => {
    const rows = Children.toArray(children).filter((child) => child.type === Row);
    return (
        <tbody>
            {rows.map(row => row)}
        </tbody>
    );
};

Body.propTypes = {
    children: PropTypes.node.isRequired,
};
