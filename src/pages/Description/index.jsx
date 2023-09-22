import { useFetcher, useLoaderData, useNavigate } from 'react-router-dom'
import React from 'react';

import { MALE } from '../../utils/enums/gender';
import { useEffect, useState } from 'react';
import { DescriptionView } from './view';
import { ERROR } from '../../utils/enums/statuses';
import { useFamouserState } from '../../hooks/useFamouserState';
import { SHOW_SNACKBAR } from '../../utils/enums/actions';
import { hideSnackbar } from '../../utils/functions/hideSnackbar';
import { GENERIC_ERROR } from '../../utils/enums/messages';

const Description = () => {
    const {
        name,
        gender,
        occupation,
        country,
        flag,
        birthday,
        height,
        is_alive: isAlive,
        net_worth: netWorth,
        isFavorite,
    } = useLoaderData();

    const [isFav, setIsFav] = useState(isFavorite);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const fetcher = useFetcher();
    const navigate = useNavigate();
    const { dispatch } = useFamouserState();

    useEffect(() => {
        const { state, data } = fetcher;

        if (state === 'loading' && data) {
            const { status, redirect, favorite } = data;

            if (status === ERROR) {
                if (redirect) {
                    navigate(fetcher.data.redirect);
                } else {
                    dispatch({ type: SHOW_SNACKBAR, payload: { type: ERROR, message: GENERIC_ERROR } });
                    hideSnackbar(dispatch);
                }
            } else {
                setIsFav(() => favorite);
            }
        }

        setButtonDisabled(fetcher.state === 'submitting');
    }, [fetcher, navigate]);

    const avatar = gender === MALE ? '/famouser/img/male_avatar.png' : '/famouser/img/female_avatar.png';

    const mappedProps = {
        avatar,
        name,
        isAlive,
        isFav,
        buttonDisabled,
        occupation,
        flag,
        country,
        gender,
        birthday,
        height,
        netWorth,
        fetcher,
    };

    return <DescriptionView {...mappedProps} />
};

export {
    Description,
}
