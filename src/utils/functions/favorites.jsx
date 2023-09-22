import { arrayUnion, doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '../../../firebase';
import { ERROR, OK } from '../enums/statuses';

export const storeFavorites = async (user) => {
    let favorites;
    const document = doc(db, 'favorites', user);
    const retrievedDocument = await getDoc(document);

    return new Promise((resolve) => {
        if (retrievedDocument.exists()) {
            const { names } = retrievedDocument.data();
            favorites = names;
        } else {
            favorites = [];
        }
        localStorage.setItem('famouser_favorites', JSON.stringify(favorites));
        resolve(favorites);
    });
};

export const deleteFavorites = () => localStorage.removeItem('famouser_favorites');

export const getFavorites = () => JSON.parse(localStorage.getItem('famouser_favorites'));

export const addToFavorites = (name, uid) => {
    const document = doc(db, 'favorites', uid)

    return setDoc(document, { names: arrayUnion(name) }, { merge: true })
        .then(() => {
            const favorites = getFavorites();
            favorites.push(name);
            localStorage.setItem('famouser_favorites', JSON.stringify(favorites));
            return true;
        })
        .catch(() => {
            return false;
        });
}

export const removeFavorite = async (name, uid) => {
    const favorites = getFavorites();
    const filteredArray = favorites.filter((fav) => fav !== name);

    const document = doc(db, 'favorites', uid);

    return new Promise((resolve, reject) => {
        try {
            setDoc(document, { names: filteredArray });
            localStorage.setItem('famouser_favorites', JSON.stringify(filteredArray));
            resolve({
                status: OK,
                data: filteredArray
            });
        } catch (e) {
            reject({
                status: ERROR,
                data: favorites
            });
        }
    });
}
