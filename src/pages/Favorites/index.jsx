import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

import { Button } from '../../components/Button';
import { Grid } from '../../components/Grid';
import { Link } from 'react-router-dom';
import { INDEX } from '../../utils/enums/links';
import { useFavorites } from './useFavorites';

const NoResults = () => (
    <p className={styles['no-results']}>No favorites found. <Link to={INDEX}>Start browsing!</Link></p>
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

export const Favorites = () => {
    const { favorites, fetcher, handleClick } = useFavorites();

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

Results.propTypes = {
    favorites: PropTypes.array.isRequired,
    fetcher: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
};
