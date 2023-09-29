import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { auth, googleProvider, githubProvider } from '../../firebase';
import { addToFavorites, removeFavorite, storeFavorites } from '../utils/functions/favorites';
import { ERROR, OK } from '../utils/enums/statuses';
import { createSlug } from '../utils/functions/slugs';
import { INDEX, LIST, LOGIN } from '../utils/enums/links';
import { AUTH_FIELDS_ERROR, EMPTY_SEARCH_ERROR, GENERIC_ERROR } from '../utils/enums/messages';
import { firebaseErrorExtractor } from '../utils/functions/firebaseErrorExtractor';

/*
* This code handle the Home Action when a user search for a celebrity
* @param {Object} request
* @returns {Object} - Object with status ok or error
*/

export async function HomeAction({ request }) {
    const formData = await request.formData();

    const query = formData && typeof formData.get('query') === 'string' ? formData.get('query') : '';
    const status = query.length < 3 ? ERROR : OK;

    return {
        status,
        ...(status === ERROR && { message: EMPTY_SEARCH_ERROR }),
        ...(status === OK && { redirect: `${LIST}?q=${query}` }),
    }
}

/*
* This code handle the Login Action
* @param {Object} request
* @returns {Object} - Object with status, user and optional redirect/messsage
*/

export async function LoginAction({ request }) {
    const formData = await request.formData();
    const email = formData && typeof formData.get('email') === 'string' ? formData.get('email') : null;
    const password = formData && typeof formData.get('password') === 'string' ? formData.get('password') : null;
    const external = formData && typeof formData.get('external') === 'string' ? formData.get('external') : null;

    if (!external && (!email || !password)) {
        return { status: ERROR, message: AUTH_FIELDS_ERROR };
    }

    const PROVIDER = {
        ['gmail']: googleProvider,
        ['github']: githubProvider,
    };

    try {
        if (external === 'recover') {
            await sendPasswordResetEmail(auth, email);
            return { status: OK, message: 'Email sent' };
        } else {
            const { user } = external ? await signInWithPopup(auth, PROVIDER[external]) : await signInWithEmailAndPassword(auth, email, password);
            await storeFavorites(user.uid);
            return { status: OK, user: user.uid, redirect: INDEX };
        }
    } catch(error) {
        const message = firebaseErrorExtractor(error) || GENERIC_ERROR
        return { status: ERROR, message };
    }
}

/*
* This code handle the Description Action, in which a user can add o delete a favorite
* @param {Object} request
* @returns {Object} - Object with status and bool favorite
*/

export async function DescriptionAction({ request }) {
    const formData = await request.formData();
    const isFavorite = formData.get('is_favorite');
    const name = formData.get('name');
    const user = await auth.currentUser;

    if (!user) {
        return { status: ERROR, redirect: `${LOGIN}?callback=${LIST}/${createSlug(name)}` }
    }

    const { uid } = user;

    if (isFavorite === 'false') {
        const response = await addToFavorites(name, uid);
        return {
            status: response ? OK : ERROR,
            favorite: true,
        }
    } else {
        const response = await removeFavorite(name, uid);
        return {
            status: response ? OK : ERROR,
            favorite: false,
        }
    }
}

/*
* This code handle the Favorites Action, in which a user can delete a favorite from Favorites view
* @param {Object} request
* @returns {Object} - status and data with favorites
*/

export async function FavoritesAction({ request }) {
    const formData = await request.formData();

    if (!auth || !auth.currentUser) {
        return { status: ERROR, data: null };
    }

    const { uid } = await auth.currentUser;

    const name = formData.get('name');

    const response = await removeFavorite(name, uid);
    return response;
}
