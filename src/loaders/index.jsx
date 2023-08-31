import { getCelebrities, openDatabase } from "../utils/indexedDB";

const CELEBRITY_API_URL = 'https://api.api-ninjas.com/v1/celebrity';
const COUNTRY_API_URL = 'https://restcountries.com/v3.1/alpha';

export async function ListLoader({ request }) {
    const query = new URL(request.url).searchParams.get('q');

    const response = await fetch(`${CELEBRITY_API_URL}?name=${query}`, {
        headers: {
            'X-Api-Key': import.meta.env.VITE_NINJA_API_KEY,
        },
        contentType: 'application/json'
    });

    const celebrities = await response.json();

    if (celebrities.length === 0) {
        throw new Error('No celebrities were found');
    }

    return celebrities;
}

export async function DescriptionLoader({ params }) {
    const { name } = params;

    const response = await fetch(`${CELEBRITY_API_URL}?name=${name.replace('-', ' ')}`, {
        headers: {
            'X-Api-Key': import.meta.env.VITE_NINJA_API_KEY,
        },
        contentType: 'application/json'
    });

    const celebrity = await response.json();

    if (celebrity.length === 0) {
        throw new Error('Celebrity data fetch error');
    }

    const { nationality } = celebrity[0];

    let countryData;

    if (nationality) {
        const countryResponse = await fetch(`${COUNTRY_API_URL}/${nationality}`);
        countryData = await countryResponse.json();
    }

    const [countryItem] = countryData || [];

    return {
        ...celebrity[0],
        country: countryItem?.name?.official ?? null,
        flag: countryItem?.flags?.png ?? null,
    };
}

export async function FavoritesLoader() {
    const db = await openDatabase();
    const favorites = await getCelebrities(db);
    return favorites;
}
