import { Link, useRouteError } from 'react-router-dom';
import React from 'react';

import styles from './styles.module.scss';

import { INDEX } from '../../utils/enums/links';
import { GENERIC_ERROR } from '../../utils/enums/messages';

const Error = () => {
    const error = useRouteError();

    return (
        <section className={styles.error}>
            <div className={styles.error__image}>
                <img src="/famouser/img/sad.jpg" width="100%" height="300px" alt="error" />
            </div>
            <div className={styles.error__message}>
                <span>{error?.message ?? GENERIC_ERROR}</span>
            </div>
            <Link to={INDEX}>Back home</Link>
        </section>
    );
};

export {
    Error,
};
