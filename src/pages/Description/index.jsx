import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { Tag } from '../../components/Tag';
import HeartIcon from '../../components/HeartIcon';
import { INDEX } from '../../utils/enums/links';
import { useDescription } from './useDescription';

const tagFormatter = (item) => String(item).replace(/_/g, ' ');

export const Description = () => {
    const {
        flag,
        avatar,
        isAlive,
        fetcher,
        isFav,
        occupation,
        country,
        gender,
        birthday,
        height,
        netWorth,
        name,
    } = useDescription();

    return (
        <section className={styles.detail}>
            <div className={styles.detail__picture} style={{ backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <img src={avatar} width="100%" height="300px" alt={name} loading="lazy" />
            </div>
            <div className={styles.detail__information}>
                <div className={styles.detail__header}>
                    <h2 className={styles.detail__title}>{name} {!isAlive && '✝️'}</h2>
                    <fetcher.Form method="post">
                        <input name="name" type="hidden" value={name} />
                        <button
                            className={styles.detail__heart}
                            name="is_favorite"
                            value={isFav}
                        >
                            {isFav ? <HeartIcon /> : <HeartIcon color="gray" />}
                        </button>
                    </fetcher.Form>
                </div>
                <div className={styles.detail__tags}>
                    {occupation && occupation.map((item, i) => <Tag key={i}>{tagFormatter(item)}</Tag>)}
                </div>
                <p>
                    <strong>Home country:</strong>
                    <span>{country ?? '-'}</span>
                </p>
                <p>
                    <strong>Gender:</strong>
                    <span>{gender ?? '-'}</span>
                </p>
                <p>
                    <strong>Birthday:</strong>
                    <span>{birthday ?? '-'}</span>
                </p>
                <p>
                    <strong>Height:</strong>
                    <span>{height ?? '-'}</span>
                </p>
                <p>
                    <strong>Net worth:</strong>
                    <span>$ {Number(netWorth).toLocaleString() ?? '-'}</span>
                </p>
                <p className={styles.detail__back}>
                    <Link to={INDEX}>Back home</Link>
                </p>
            </div>
        </section>
    );
};
