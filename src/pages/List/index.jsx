import { Link, useLoaderData } from "react-router-dom";

import styles from './styles.module.scss';

export default function List() {
    const actors = useLoaderData();
    
    if (!actors) return null;
    console.log(actors);
    return (
        <section id="list" className={styles.list}>
            {
                actors.map((actor, i) => (
                    <Link to={`/stars/${actor.name.replace(' ', '-')}`} key={i}>
                        <div className={i === actors.length - 1 ? `${styles.row} ${styles['row--last']}` : styles['row']}>
                            <p className={`${styles.row__title} ${actor.is_alive ? '' : styles['row__title--dead']}`}>
                                {actor.name}
                            </p>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}
