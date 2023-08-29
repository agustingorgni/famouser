import { Link, useLoaderData } from "react-router-dom";

import styles from './styles.module.scss';

export default function List() {
    const celebrities = useLoaderData();

    const COLORS = {
        1: 'teal',
        2: 'orange',
        default: 'gray',
    };

    return (
        <section className={styles.list}>
            {
                celebrities.map(
                    celebrity => {
                        const randomNumber = Math.floor(Math.random() * 3) + 1;

                        return (
                            <div key={celebrity.name} className={styles.card}>
                                <div className={styles.card__image}>
                                    <img
                                        src={celebrity.gender && celebrity.gender === 'male' ? '/famouser/img/male_avatar.jpg' : '/famouser/img/female_avatar.png'}
                                        width="100%"
                                        height="100%"
                                        alt={celebrity.name}
                                        loading="lazy"
                                    />
                                    <div className={styles.card__cta}>
                                        <Link to={`/famouser/star/${celebrity.name.replace(' ', '-')}`}>🔎</Link>
                                    </div>
                                </div>
                                <div
                                    className={`${styles.card__description} ${styles[`card__description--${COLORS[randomNumber] || COLORS.default}`]}`}
                                >
                                    <span className={styles.card__title}>{celebrity.name}</span>
                                    { celebrity.net_worth && <span>Net worth $ {Number(celebrity.net_worth).toLocaleString()}</span> }
                                </div>
                            </div>)
                    }
                )
            }
        </section>
    )
}
