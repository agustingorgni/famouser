import { useEffect, useState } from 'react';

import { db } from '../../../firebase';
import { useAuth } from '../../hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FavoritesView } from './view';

const Favorites = () => {
    const { user, loading } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && !loading) {
            const document = doc(db, "favorites", user.uid);
            getDoc(document)
                .then((retrievedDocument) => {
                    const { celebrities } = retrievedDocument.data();
                    setFavorites(celebrities);
                })
                .catch((e) => console.log(e));
        } else {
            if (!loading) {
                navigate('/famouser/login', { replace: true })
            }
        }
    }, [user, navigate, loading]);

    return <FavoritesView favorites={favorites} />
};

export {
    Favorites,
}
