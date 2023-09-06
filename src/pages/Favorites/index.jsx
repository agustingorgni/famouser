import { useState } from 'react';
import { useDatabase } from '../../hooks/useDatabase';
import { addUser, deleteCelebrity, openDatabase } from '../../utils/indexedDB';
import styles from './styles.module.scss';
import { useLoaderData } from 'react-router-dom';

export async function action({ request, params }) {
    const formData = await request.formData();
    const db = await openDatabase();
    if (!formData.get('favorite')) {
        console.log('deletee');
    } else {
        await addUser(db, { name: formData.get('name') });
    }
    
    return null;
}

const Favorites = () => {
    const favorites = useLoaderData();
    const [database] = useDatabase();
    const [mappedFavorites, setMappedFavorites] = useState([...favorites]);

    const handleDelete = async (key) => {
        await deleteCelebrity(database, key);
        const updatedFavorites = mappedFavorites.filter(item => item.key !== key);
        
        setMappedFavorites(updatedFavorites);
    };

    return (
        <section className={styles.favorites}>
            {
                mappedFavorites.map((fav) => <div key={fav.key}><span>{fav.value}</span><button onClick={() => handleDelete(fav.key)}>Delete</button></div>)
            }
        </section>
    );
};

export {
    Favorites,
}
