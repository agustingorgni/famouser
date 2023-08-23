export async function ListLoader({ request }) {
    const query = new URL(request.url).searchParams.get('q');

    try {
        const fetchedActors = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${query}`, {
            headers: {
                'X-Api-Key': import.meta.env.VITE_NINJA_API_KEY,
            },
            contentType: 'application/json'
        });
        return fetchedActors.json();
    } catch(e) {
        return null;
    }
}

export async function RootLoader({ request }) {
    const query = new URL(request.url).searchParams.get('q');
    return query;
}

export async function DescriptionLoader({ params }) {
    const { name } = params;

    try {
        const actor = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${name.replace('-', ' ')}`, {
            headers: {
                'X-Api-Key': import.meta.env.VITE_NINJA_API_KEY,
            },
            contentType: 'application/json'
        });
        const data = await actor.json();
        return data[0];
    } catch(e) {
        return null;
    }
}
