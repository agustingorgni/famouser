import { useFetcher, useLoaderData } from "react-router-dom"

import { MALE } from "../../utils/enums/gender";
import { useEffect, useState } from "react";
import { DescriptionView } from "./view";

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

    useEffect(() => {
        if (fetcher.state === 'loading') {
            if(fetcher.data) {
                setIsFav(() => {
                    if (fetcher.data.message === 'added') {
                        return true
                    } else {
                        return false
                    }
                })
            }
        } 
        
        if (fetcher.state === 'submitting') {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [fetcher]);

    const avatar =
        gender === MALE
            ? '/famouser/img/male_avatar.jpg'
            : '/famouser/img/female_avatar.png';

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
