import styles from './styles.module.scss';

export async function action({ request, params }) {
    const formData = await request.formData();

    if (!formData.get('favorite')) {
        console.log('delete');
    } else {
        // ADD USER
    }
    
    return null;
}

const Favorites = () => {
    return (
        <section className={styles.favorites}>
            favorites
        </section>
    );
};

export {
    Favorites,
}
