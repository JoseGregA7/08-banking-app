import { useNavigate } from 'react-router-dom';

export const useGoBack = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return { handleGoBack };
};