import { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Input = forwardRef(({ className, style, name, placeholder, type, defaultValue }, ref) => (
    <input
        className={classNames(styles.input, styles[`input--${style}`], className)}
        ref={ref}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
    />
));

Input.displayName = 'Input';

Input.propTypes = {
    style: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
};

Input.defaultValues = {
    style: 'normal',
    placeholder: '',
    className: '',
    name: '',
    type: 'text',
    defaultValue: '',
};

export {
    Input,
}
