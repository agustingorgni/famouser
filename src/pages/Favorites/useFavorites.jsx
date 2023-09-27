import { useFetcher, useLoaderData, useNavigate } from 'react-router-dom';

import { createSlug } from '../../utils/functions/slugs';
import { LIST } from '../../utils/enums/links';

export const useFavorites = () => {
    const data = useLoaderData();
    const fetcher = useFetcher();
    const navigate = useNavigate();

    const handleClick = (name) => {
        navigate(`${LIST}/${createSlug(name)}`)
    };

    return {
        favorites: data.favorites,
        fetcher,
        handleClick,
    };
};
