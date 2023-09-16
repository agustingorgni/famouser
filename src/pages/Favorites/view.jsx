import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const FavoritesView = ({ favorites }) => (
    <section className={styles.favorites}>
        {
            favorites.length === 0
                ? "Fetching data"
                : favorites.map((favorite, i) => <p key={i}>{favorite}</p>)
        }
    </section>
);

FavoritesView.propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};
