import { useState } from 'react';
import { authenticateUser, checkClientExists, fetchAccountData } from '../utils/loginUtils';
import { ILoginData } from '../interfaces/request';

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const loginUser = async (formData: ILoginData) => {
        if (!formData.email || !formData.password) {
            setError('Email y contraseña son obligatorios.');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await authenticateUser(formData.email, formData.password);
            const { token, id: clientId } = response.data.dinBody;
            if (!token || !clientId) {
                setError('Error en la autenticación. Verifica tus credenciales.');
                return;
            }
            localStorage.setItem('token', token);
            localStorage.setItem('clientId', clientId);

            const clientExists = await checkClientExists(clientId, token);
            if (clientExists) {
                await fetchAccountData(clientId, token);
            } else {
                setError('Cliente no encontrado.');
            }
        } catch (error) {
            console.error('Error en el login:', error);
            setError('Hubo un error al autenticar al usuario. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return {
        loginUser,
        loading,
        error,
    };
};
