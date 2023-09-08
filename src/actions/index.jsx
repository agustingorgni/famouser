import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { redirect } from 'react-router-dom';

import { auth } from '../../firebase';

export async function LoginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        await signInWithEmailAndPassword(auth, email, password);
        return redirect('/famouser/');
    } catch(error) {
        console.log(error);
        return { error: true, message: 'Authentication failed' };
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