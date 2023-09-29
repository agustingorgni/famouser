import { Form } from 'react-router-dom';
import React from 'react';

import styles from './styles.module.scss';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
import { GmailIcon } from '../../components/GmailIcon';
import { useLogin } from './useLogin';
import { GithubIcon } from '../../components/GithubIcon';

export const Login = () => {
    useLogin();

    return (
        <section className={styles.login}>
            <div className={styles.login__image}>
                <img src='/famouser/img/login.jpg' alt="login cover" height="100%" width="100%" loading='lazy' />
            </div>
            <div className={styles.login__content}>
                <h2 className={styles.login__title}>Welcome back!</h2>
                <Form className={styles.form} method='post'>
                    <Input style='outline' className={styles.login__input} placeholder='Your e-mail' name='email' type='text' />
                    <Input style='outline' className={styles.login__input} placeholder='Your password' name='password' type='password' />
                    <Button style='danger' className={styles.login__button} type='submit'>Login</Button>
                </Form>
                <Divider className={styles.login__divider} />
                <Form method='post'>
                    <Button style="unestiled" name="external" value="gmail" type='submit'><GmailIcon /></Button>
                    <Button style="unestiled" name="external" value="github" type='submit'><GithubIcon /></Button>
                </Form>
            </div>
        </section>
    );
};
