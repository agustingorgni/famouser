import PropTypes from 'prop-types';
import { Children } from "react";
import React from 'react';

import { Data } from './Data';

export const Row = ({ children, className }) => {
    const data = Children.toArray(children).filter((child) => child.type === Data);
    return (
        <tr className={className}>
            {data.map(td => td)}
        </tr>
    );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Row.defaultProps = {
    className: '',
};
