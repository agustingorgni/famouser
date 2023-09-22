import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles.module.scss';

export const Title = ({ children, className }) => <th className={classNames(styles.th, className)}>{children}</th>;

Title.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Title.defaultProps = {
    className: '',
};
