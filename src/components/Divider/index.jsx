import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

export const Divider = ({ className }) => <hr className={classNames(styles.divider, className)} />;

Divider.propTypes = {
    className: PropTypes.string,
};

Divider.defaultProps = {
    className: '',
};
