import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

export const Button = ({ children, className, style, size, onClick, ...rest }) => (
    <button
        {...rest}
        className={classNames(styles.button, styles[`button--${size}`], styles[`button--${style}`], className)}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.oneOf(['info', 'success', 'danger', 'unestiled']),
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    style: 'info',
    size: 's',
    onClick: null,
};
