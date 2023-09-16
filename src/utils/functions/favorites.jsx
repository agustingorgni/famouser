import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";

import { db } from "../../../firebase";

export const storeFavorites = async (user) => {
    let favorites;

    const document = doc(db, "favorites", user);
    const retrievedDocument = await getDoc(document);

    if (retrievedDocument.exists()) {
        const { names } = retrievedDocument.data();
        favorites = names;
    } else {
        favorites = [];
    }

    localStorage.setItem('famouser_favorites', JSON.stringify(favorites));
};

export const deleteFavorites = () => {
    localStorage.removeItem('famouser_favorites');
};

export const getFavorites = () => JSON.parse(localStorage.getItem('famouser_favorites'));

export const addToFavorites = (name, uid) => {
    const document = doc(db, "favorites", uid)

    return setDoc(document, { names: arrayUnion(name) }, { merge: true })
        .then(() => {
            const favorites = getFavorites();
            favorites.push(name);
            localStorage.setItem('famouser_favorites', JSON.stringify(favorites));
            return true;
        })
        .catch(e => {
            console.log('Se ha producido un error', e);
            return false;
        });
}

export const removeFavorite = async (name, uid) => {
    const favorites = getFavorites();
    const filteredArray = favorites.filter((fav) => fav !== name);

    const document = doc(db, "favorites", uid);

    return setDoc(document, { names: filteredArray })
        .then(() => {
            localStorage.setItem('famouser_favorites', JSON.stringify(filteredArray));
            return true;
        })
        .catch(e => {
            console.log('Se ha producido un error', e);
            return false;
        });
}
