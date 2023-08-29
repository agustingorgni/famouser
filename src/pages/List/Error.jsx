import { Link, useRouteError } from "react-router-dom";

import styles from './error.module.scss';

const Error = () => {
    const { message } = useRouteError();

    return (
        <section className={styles.error}>
            <div className={styles.error__image}>
                <img src="/famouser/img/sad.jpg" width="100%" height="100%" alt="error" loading="lazy" />
            </div>
            <div className={styles.error__message}>
                <span>{message}</span>
            </div>
            <Link to="/famouser/">Back home</Link>
        </section>
    );
};

export {
    Error,
}