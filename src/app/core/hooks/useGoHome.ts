import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGoHome = () => {
    const navigate = useNavigate();
    const handleEndSession = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('clientId');
        localStorage.removeItem('tokenExpiration');
        alert('Sesión cerrada exitosamente')
        navigate('/');
    }, [navigate]);
    return { handleEndSession };
};