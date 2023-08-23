import { Link, useLoaderData } from "react-router-dom";

import styles from './styles.module.scss';
import Avatar from "../../components/Avatar";

export default function List() {
    const actors = useLoaderData();
    // TODO: ver de enviar un error para mostrarlo en una pagina general
    if (!actors || actors.length === 0) return <div>No stars were found 😞</div>;

    return (
        <section id="list" className={styles.list}>
            <h2>Your list of stars ✨</h2>
            {
                actors.map((actor, i) => (
                    <Link to={`/stars/${actor.name.replace(' ', '-')}`} key={i}>
                        <div className={i === actors.length - 1 ? `${styles.row} ${styles['row--last']}` : styles['row']}>
                            <div className={styles.row__picture}>
                                <Avatar gender={actor.gender} />
                            </div>
                            <div className={styles.row__information}>
                                <span className={`${styles.row__title} ${actor.is_alive ? '' : styles['row__title--dead']}`}>{actor.name}</span>
                                {actor.gender && <span className={styles.row__subtitle}>{actor.gender}</span>}
                                {actor.age && <span className={styles.row__subtitle}>{actor.age} years old</span>}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}
