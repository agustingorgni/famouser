export async function ListLoader({ request }) {
    const query = new URL(request.url).searchParams.get('q');

    const response = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${query}`, {
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

    const response = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${name.replace('-', ' ')}`, {
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

    const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${nationality}`);
    const countryData = await countryResponse.json();

    return {
        ...celebrity[0],
        country: countryData[0].name.official,
        flag: countryData[0].flags.png,
    };
}
