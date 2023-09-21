import { CELEBRITY_API_URL, COUNTRY_API_URL } from "../utils/enums/urls";
import { getFavorites } from "../utils/functions/favorites";
import { fetcher } from "../utils/functions/fetcher";
import { deleteSlug } from "../utils/functions/slugs";

/*
* List Loader
* This is called before the List view is rendered
* @param {Object} request
* @returns [Array] celebrities
*/

export async function ListLoader({ request }) {
    const query = new URL(request.url).searchParams.get('q');

    if (!query) {
        throw new Error('You must provide a name to search');
    }

    const celebrities = await fetcher(`${CELEBRITY_API_URL}?name=${query}`, {
        headers: {
            'X-Api-Key': import.meta.env.VITE_NINJA_API_KEY,
        },
        contentType: 'application/json'
    });

    if (celebrities.length === 0) {
        throw new Error('No celebrities were found');
    }

    return celebrities;
}

/*
* Description Loader
* This is called before the Description view is rendered for a certain celebrity
* @param {Object} request
* @returns {Object} - Country, flag, isFavaorite, name, etc
*/

export async function DescriptionLoader({ params }) {
    const { name } = params;
    const favorites = getFavorites();

    const celebrity = await fetcher(`${CELEBRITY_API_URL}?name=${deleteSlug(name)}`, {
        headers: {
            'X-Api-Key': import.meta.env.VITE_NINJA_API_KEY,
        },
        contentType: 'application/json'
    });

    if (celebrity.length === 0) {
        throw new Error('Celebrity data fetch error');
    }

    const { nationality } = celebrity[0];

    let countryData;

    if (nationality) {
        countryData = await fetcher(`${COUNTRY_API_URL}/${nationality}`);
    }

    const [countryItem] = countryData || [];

    return {
        ...celebrity[0],
        country: countryItem?.name?.official ?? null,
        flag: countryItem?.flags?.png ?? null,
        isFavorite: (favorites && favorites.includes(deleteSlug(name))) ? true : false,
    };
}

/*
* Favorites Loader
* This is called before the Favorites view
* @returns [Array] - Favorites
*/

export async function FavoritesLoader() {
    const favorites = getFavorites();
    return { favorites };
}
