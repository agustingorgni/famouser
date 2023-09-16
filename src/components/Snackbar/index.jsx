import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const Snackbar = ({ show, type, message }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={classNames(styles.snackbar, styles[`snackbar--${type}`])}>
            {message}
        </div>
    );
};

Snackbar.propTypes = {
    show: PropTypes.bool.isRequired,
    type: PropTypes.string,
    message: PropTypes.string,
};

Snackbar.defaultProps = {
    type: 'success',
    message: '',
};
