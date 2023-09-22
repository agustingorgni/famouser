import { useEffect, useState } from 'react';
import { auth } from '../../firebase';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setIsLoading] = useState(true);

    const handleUser = (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        const unsuscribe = auth.onIdTokenChanged(handleUser);
        return () => unsuscribe();
    }, []);

    return { user, loading }
};
