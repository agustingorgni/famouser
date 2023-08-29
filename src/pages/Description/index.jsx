import { Link, useLoaderData } from "react-router-dom"

import styles from './styles.module.scss';

const Description = () => {
    const celebrity = useLoaderData();

    const {
        name,
        gender,
        occupation,
        country,
        flag,
        birthday,
        height,
        is_alive: isAlive,
        net_worth: netWorth,
    } = celebrity;

    const avatar =
        gender === 'male'
        ? '/famouser/img/male_avatar.jpg'
        : '/famouser/img/female_avatar.png';

    return (
        <section className={styles.detail}>
            <div className={styles.detail__picture}>
                <img src={avatar} width="100%" height="100%" alt={name} loading="lazy" />
            </div>
            <div className={styles.detail__information}>
                <div className={styles.detail__header}>
                    <h2 className={styles.detail__title}>{name} {isAlive ? '' : '✝️'}</h2>
                    <span>🧡</span>
                </div>
                <div className={styles.detail__tags}>
                    {
                        occupation.map((item, i) => <span key={i} className={styles.tag}>{item.replace('_', ' ')}</span>)
                    }
                </div>
                <p>
                    <strong>Home country:</strong>
                    <span>{country}</span>
                    <span>
                        <img src={flag} alt={country} width="100%" height="100%" loading="lazy" />
                    </span>
                </p>
                <p>
                    <strong>Gender:</strong>
                    <span>{gender || '-'}</span>
                </p>
                <p>
                    <strong>Birthday:</strong>
                    <span>{birthday || '-'}</span>
                </p>
                <p>
                    <strong>Height:</strong>
                    <span>{height || '-'}</span>
                </p>
                <p>
                    <strong>Net worth:</strong>
                    <span>$ {Number(netWorth).toLocaleString() || '-'}</span>
                </p>
                <p className={styles.detail__back}>
                    <Link to="/famouser/">Back home</Link>
                </p>
            </div>
        </section>
    );
};

export {
    Description,
}
