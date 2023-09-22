import { useContext } from 'react';
import { FamouserContext } from '../providers/FamouserProvider';

export const useFamouserState = () => {
    const context = useContext(FamouserContext);

    if (!context) {
        throw new Error('This hook can only be used inside Famouser Provider');
    }

    return context;
};
