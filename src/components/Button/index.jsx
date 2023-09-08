import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Button = ({ children, className, style, size, onClick, ...rest }) => {
    return (
        <button
            {...rest}
            className={classNames(styles.button, styles[`button--${style}`], styles[`button--${size}`], className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.oneOf(['info', 'success', 'danger']),
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: '',
    style: 'info',
    size: 's',
    onClick: null,
};
