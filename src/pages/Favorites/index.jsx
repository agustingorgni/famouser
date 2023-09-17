import { useFetcher, useLoaderData, useNavigate } from 'react-router-dom';

import { FavoritesView } from './view';

export const Favorites = () => {
    const data = useLoaderData();
    const fetcher = useFetcher();
    const navigate = useNavigate();

    const handleClick = (name) => {
        navigate(`/famouser/stars/${name.replace(' ', '-')}`)
    };

    const mappedProps = {
        favorites: data.favorites,
        fetcher,
        handleClick,
    };

    return <FavoritesView {...mappedProps} />
};
