import { Form } from 'react-router-dom';

import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import SearchIcon from '../../components/SearchIcon';
import { ExternalLink } from '../../components/ExternalLink';
import { Section } from '../../components/Section';

const Home = () => {
    return (
        <>
            <Section className={styles.cover}>
                <Section.Description className={styles.cover__description}>
                    <div className={styles.cover__text}>
                        <h2 className={styles.cover__title}>This is <strong>Famouser</strong></h2>
                        <h3 className={styles.cover__subtitle}>You can learn a lot about your favorite artist by just typing his/her name!</h3>
                    </div>
                    <div className={styles.cover__image}>
                        <img src='/famouser/img/celebrities.png' alt="famouser cover" height="auto" width="100%" loading='lazy' />
                    </div>
                </Section.Description>
                <div className={styles.searchbox}>
                    <Form action='stars' className={styles.searchbox__form}>
                        <Input name="q" className={styles.searchbox__input} placeholder="e.g. Tom Delonge" type="string" />
                        <button className={styles.searchbox__button} type='submit'>
                            <SearchIcon width={40} height={40} />
                        </button>
                    </Form>
                </div>
            </Section>
            <Section className={styles.about}>
                <Section.Image className={styles.about__image}>
                    <img src='/famouser/img/cartoon.png' alt="about famouser" height="auto" width="100%" loading='lazy' />
                </Section.Image>
                <Section.Description className={styles.about__description}>
                    <h3 className={styles.about__title}>Welcome to Famouser!</h3>
                    <p className={styles.about__p}>This is a very simple project where you can browse for your favorite artist and learn everything about him/her!</p>
                    <p className={styles.about__p}>This project was created using <ExternalLink href='https://vitejs.dev/'>Vite</ExternalLink>, <ExternalLink href='https://react.dev/'>React</ExternalLink>, <ExternalLink href='https://sass-lang.com/'>Sass</ExternalLink> and <ExternalLink href='https://reactrouter.com/en/main'>React Router Dom</ExternalLink>. Its goal is to learn how React Router Dom 6 works..and it is just fantastic!</p>
                    <p className={styles.about__p}>Also, this app use the service of <ExternalLink href='https://api-ninjas.com/'>API Ninjas</ExternalLink> to fetch all the displayed Data. They have a lot of demo APIs if you want to check them!</p>
                    <p className={styles.about__p}>Thanks for stoping by and have a good one!</p>
                </Section.Description>
            </Section>
            <Section className={styles.contact}>
                <Section.Description className={styles.contact__description}>
                    <h3 className={styles.contact__title}>About the author</h3>
                    <p className={styles.contact__p}>My name is Agustin Gorgni, and Im a Software Engineer currently working at Mercado Libre as a frontend developer.</p>
                    <p className={styles.contact__p}>Feel free to contact me on <ExternalLink href="https://www.linkedin.com/in/agustin-gorgni-95607360/">Linkedin</ExternalLink></p>
                </Section.Description>
                <Section.Image className={styles.contact__image}>
                    <img src='/famouser/img/me.png' alt="Agustin Gorgni" height="auto" width="100%" loading='lazy' />
                </Section.Image>
            </Section>
        </>
    );
}

export {
    Home,
}