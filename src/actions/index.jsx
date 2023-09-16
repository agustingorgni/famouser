import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { redirect } from 'react-router-dom';

import { auth } from '../../firebase';
import { addToFavorites, removeFavorite, storeFavorites } from '../utils/functions/favorites';

export async function LoginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        await storeFavorites(user.uid);
        return { response: 'ok', user: user.uid, redirect: '/famouser/' };
    } catch(error) {
        return { response: 'error', message: error.message };
    }
}

export async function SignupAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return redirect('/famouser/');
    } catch(error) {
        console.log(error);
        return { error: true, message: 'Something went wrong' };
    }
}

export async function DescriptionAction({ request }) {
    const formData = await request.formData();
    const isFavorite = formData.get('is_favorite');
    const name = formData.get('name');
    const user = await auth.currentUser;

    if (!user) {
        return { error: true, redirect: `/famouser/login?callback=/famouser/stars/${name.replace(' ', '-')}` }
    }

    const { uid } = user;

    if (isFavorite === "false") {
        const response = await addToFavorites(name, uid);
        return {
            message: response ? 'added' : 'failed to add'
        }
    } else {
        const response = await removeFavorite(name, uid);
        return {
            message: response ? 'deleted' : 'failed to delete'
        }
    }
}