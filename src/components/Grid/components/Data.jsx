import PropTypes from 'prop-types';
import React from 'react';

export const Data = ({ children, className }) => (
    <td className={className}>{children}</td>
);

Data.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Data.defaultProps = {
    className: '',
};
