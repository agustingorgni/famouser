import { forwardRef } from 'react';

import styles from './styles.module.scss';

const Input = forwardRef((props, ref) => {
    return (
        <input className={styles.input} ref={ref} {...props} />
    )
});

Input.displayName = 'Input';

export {
    Input,
}
