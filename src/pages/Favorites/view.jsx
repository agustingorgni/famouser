import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { Grid } from '../../components/Grid';
import { Link } from 'react-router-dom';

const NoResults = () => (
    <p className={styles['no-results']}>No favorites found. <Link to="/famouser/">Start browsing!</Link></p>
);

const Results = ({ favorites, fetcher, handleClick }) => (
    <Grid>
        <Grid.Body>
            {
                favorites.map((favorite, i) => (
                    <Grid.Row key={i}>
                        <Grid.Data className={styles.name}>{favorite}</Grid.Data>
                        <Grid.Data className={styles.actions}>
                            <fetcher.Form method="post">
                                <Button style="danger" name="name" value={favorite} type="submit">Remove</Button>
                            </fetcher.Form>
                            <Button onClick={() => handleClick(favorite)} name="name" value={favorite}>Visit</Button>
                        </Grid.Data>
                    </Grid.Row>
                ))
            }
        </Grid.Body>
    </Grid>
);

export const FavoritesView = ({ favorites, fetcher, handleClick }) => {
    return (
        <section className={styles.favorites}>
        {
            favorites.length === 0
                ? <NoResults />
                : <Results favorites={favorites} fetcher={fetcher} handleClick={handleClick} />
        }
    </section>
    );
};

FavoritesView.propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};
