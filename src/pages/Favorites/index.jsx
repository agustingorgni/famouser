import { useFetcher, useLoaderData, useNavigate } from 'react-router-dom';
import React from 'react';

import { FavoritesView } from './view';
import { createSlug } from '../../utils/functions/slugs';
import { LIST } from '../../utils/enums/links';

export const Favorites = () => {
    const data = useLoaderData();
    const fetcher = useFetcher();
    const navigate = useNavigate();

    const handleClick = (name) => {
        navigate(`${LIST}/${createSlug(name)}`)
    };

    const mappedProps = {
        favorites: data.favorites,
        fetcher,
        handleClick,
    };

    return <FavoritesView {...mappedProps} />
};
