import { signInWithEmailAndPassword } from 'firebase/auth';
import { redirect } from 'react-router-dom';

import { auth } from '../../firebase';

export async function LoginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        await signInWithEmailAndPassword(auth, email, password);
        return redirect('/famouser/');
    } catch(_) {
        return { error: true, message: 'Authentication failed' };
    }
}