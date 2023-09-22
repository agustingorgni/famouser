import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Children } from 'react';
import React from 'react';

import styles from '../styles.module.scss';
import { Title } from './Title';

export const Header = ({ children, className }) => {
    const items = Children.toArray(children).filter((child) => child.type === Title);
    return (
        <theader className={classNames(styles.header, className)}>
            {items.map((item) => item)}
        </theader>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Header.defaultProps = {
    className: '',
};
