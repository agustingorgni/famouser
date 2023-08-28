import { Link, useLoaderData } from "react-router-dom";

import styles from './styles.module.scss';

export default function List() {
    const celebrities = useLoaderData();

    // TODO: ver de enviar un error para mostrarlo en una pagina general
    if (!celebrities || celebrities.length === 0) return <div>No stars were found 😞</div>;

    return (
        <section className={styles.list}>
            {
                celebrities.map(
                    celebrity => (
                        <div key={celebrity.name} className={styles.card}>
                            <div className={styles.card__image}>
                                <img src="/famouser/img/avatar.jpg" width="100%" height="100%" alt={celebrity.name} loading="lazy" />
                                <div className={styles.card__cta}>
                                    <Link to={`/famouser/star/${celebrity.name.replace(' ', '-')}`}>👁️</Link></div>
                            </div>
                            <div className={styles.card__description}>
                                <span>{celebrity.name}</span>
                                <span>$ {celebrity.net_worth}</span>
                            </div>
                        </div>
                    )
            )
            }
        </section>
    )
}
