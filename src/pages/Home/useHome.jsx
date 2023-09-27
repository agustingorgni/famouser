import { useEffect } from 'react';
import { useActionData, useNavigate } from 'react-router-dom';

import { OK } from '../../utils/enums/statuses';

export const useHome = () => {
    const data = useActionData();
    const navigate = useNavigate();

    useEffect(() => {
        if (data && data.status === OK) {
            navigate(data.redirect);
        }
    }, [data, navigate]);

    return {
        data,
    }
};
