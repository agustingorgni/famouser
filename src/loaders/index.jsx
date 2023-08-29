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
    // TODO: code better this
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
