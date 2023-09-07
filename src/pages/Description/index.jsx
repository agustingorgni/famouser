import { Link, useFetcher, useLoaderData } from "react-router-dom"

import styles from './styles.module.scss';
import { Tag } from "../../components/Tag";
import { MALE } from "../../utils/enums/gender";

const tagFormatter = (item) => String(item).replace(/_/g, ' ');

const Description = () => {
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
    } = useLoaderData();
 
    const fetcher = useFetcher();

    const avatar =
        gender === MALE
        ? '/famouser/img/male_avatar.jpg'
        : '/famouser/img/female_avatar.png';

    return (
        <section className={styles.detail}>
            <div className={styles.detail__picture}>
                <img src={avatar} width="100%" height="100%" alt={name} loading="lazy" />
            </div>
            <div className={styles.detail__information}>
                <div className={styles.detail__header}>
                    <h2 className={styles.detail__title}>{name} {!isAlive && '✝️'}</h2>
                    <fetcher.Form method="POST" action="/famouser/favorites">
                        <input name="name" value={name} type="hidden" />
                        <button name="favorite" value="Nose">Favorite</button>
                    </fetcher.Form>
                </div>
                <div className={styles.detail__tags}>
                    { occupation && occupation.map((item, i) => <Tag key={i}>{tagFormatter(item)}</Tag>) }
                </div>
                <p>
                    <strong>Home country:</strong>
                    <span>{country ?? '-'}</span>
                    { flag && <span>
                        <img src={flag} alt={country} width="100%" height="100%" loading="lazy" />
                    </span> }
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
                    <Link to="/famouser/">Back home</Link>
                </p>
            </div>
        </section>
    );
};

export {
    Description,
}
