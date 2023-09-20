const translations = {
    en: {
        'You can learn a lot about your favorite artist by just typing his/her name!': 'You can learn a lot about your favorite artist by just typing his/her name!'
    },
    es: {
        'You can learn a lot about your favorite artist by just typing his/her name!': 'Puedes conocer mucho de tu artista favorito con tan solo buscar su nombre!'
    }
}

export const getText = (text) => {
    const language = navigator.language.split('-')[0];
    return translations[language][text]
};
