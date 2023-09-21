import { useFetcher, useLoaderData, useNavigate } from 'react-router-dom';
import React from 'react';

import { FavoritesView } from './view';
import { createSlug } from '../../utils/functions/slugs';

export const Favorites = () => {
    const data = useLoaderData();
    const fetcher = useFetcher();
    const navigate = useNavigate();

    const handleClick = (name) => {
        navigate(`/famouser/stars/${createSlug(name)}`)
    };

    const mappedProps = {
        favorites: data.favorites,
        fetcher,
        handleClick,
    };

    return <FavoritesView {...mappedProps} />
};
