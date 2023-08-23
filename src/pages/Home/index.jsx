import styles from './styles.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <h2>Welcome to Famouser! 👋</h2>
            <p>This is a very simple project where you can browse for your favorite artist and learn everything about him/her!</p>
            <p>This project was created using Vite, React, Sass and React Router Dom. Its goal is to learn how React Router Dom 6 works..and it's just fantastic!</p>
            <p>Thanks for stoping by and have a good one!</p>
        </div>
    );
}

export {
    Home,
}