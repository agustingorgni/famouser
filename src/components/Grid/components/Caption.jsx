import PropTypes from 'prop-types';
import React from 'react';

export const Caption = ({ children }) => <caption>{children}</caption>;

Caption.propTypes = {
    children: PropTypes.node.isRequired,
};
