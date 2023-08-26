import { Link, useLoaderData } from "react-router-dom";

import styles from './styles.module.scss';
import { MemorizedAvatar as Avatar } from "../../components/Avatar";

export default function List() {
    const celebrities = useLoaderData();
    // TODO: ver de enviar un error para mostrarlo en una pagina general
    if (!celebrities || celebrities.length === 0) return <div>No stars were found 😞</div>;

    return (
        <section className={styles.list}>
            {
                celebrities.map((celeb, i) => (
                    <Link to={`/famouser/stars/${celeb.name.replace(' ', '-')}`} key={i}>
                        <div className={styles.card}>
                            <div className={styles.card__image}>
                                <img src="/famouser/img/avatar.jpg" width="100%" />
                            </div>
                            <hr className={styles.card__divider} />
                            <div className={styles.card__information}>
                                <span>{celeb.name}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}
