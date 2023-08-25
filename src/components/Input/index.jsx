import { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Input = forwardRef(({ className, name, placeholder, type, defaultValue }, ref) => {
    return (
        <input
            className={classNames(className, styles.input)}
            ref={ref}
            name={name}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
        />
    )
});

Input.displayName = 'Input';

Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
};

Input.defaultValues = {
    placeholder: '',
    className: '',
    name: '',
    type: 'text',
    defaultValue: '',
};

export {
    Input,
}
