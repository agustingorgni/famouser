import { Form } from 'react-router-dom';
import React from 'react';

import styles from './styles.module.scss';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
import { GmailIcon } from '../../components/GmailIcon';
import { useLogin } from './useLogin';
import { GithubIcon } from '../../components/GithubIcon';
import { Close } from '../../components/Close';

export const Login = () => {
    const { showResetForm, changeResetFormVisibility } = useLogin();

    return (
        <section className={styles.login}>
            <div className={styles.login__image}>
                <img src='/famouser/img/login.jpg' alt="login cover" height="100%" width="100%" loading='lazy' />
            </div>
            <div className={styles.login__content}>
                <div className={`${styles.login__form} ${showResetForm ? styles['login__form--hidden'] : styles['login__form--visible']}`}>
                    <h2 className={styles.login__title}>Welcome back!</h2>
                    <Form style={{ display: 'flex', flexFlow: 'column nowrap', gap: 20, padding: 20 }} method='post'>
                        <Input style='outline' className={styles.login__input} placeholder='Your e-mail' name='email' type='text' />
                        <Input style='outline' className={styles.login__input} placeholder='Your password' name='password' type='password' />
                        <Button style='danger' className={styles.login__button} type='submit'>Login</Button>
                    </Form>
                    <span className={styles.login__forgot} onClick={changeResetFormVisibility}>Forgot your password?</span>
                    <Divider className={styles.login__divider} />
                    <Form method='post'>
                        <Button style="unestiled" name="external" value="gmail" type='submit'><GmailIcon /></Button>
                        <Button style="unestiled" name="external" value="github" type='submit'><GithubIcon /></Button>
                    </Form>
                </div>
                <div className={`${styles['login__recover-form']} ${showResetForm ? styles['login__recover-form--visible'] : styles['login__recover-form--hidden']}`}>
                    <Button style="unestiled" onClick={changeResetFormVisibility} type='submit'><Close /></Button>
                    <Form style={{ display: 'flex', flexFlow: 'column nowrap', gap: 20, padding: 20 }} className={styles.form} method='post'>
                        <Input style='outline' className={styles.login__input} placeholder='Your e-mail' name='email' type='text' />
                        <Button style='info' name="external" value="recover" className={styles.login__button} type='submit'>Recover account</Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};
