import { useState } from 'react';
import { authenticateUser, createCustomer } from '../utils/authUtils';
import { IFirstLoginData } from '../interfaces/request';

export const useFirstLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const validateFormData = (formData: IFirstLoginData): string | null => {
        if (!formData.email || !formData.password) {
            return 'Email y contraseña son obligatorios.';
        }
        return null;
    };
    const loginAndCreateClient = async (formData: IFirstLoginData) => {
        const validationError = validateFormData(formData);
        if (validationError) {
            setError(validationError);
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const responseData = await authenticateUser(formData);
            if (responseData?.dinBody?.token) {
                const token = responseData.dinBody.token;
                const clientId = responseData.dinBody.id;
                localStorage.setItem('token', token);
                localStorage.setItem('clientId', clientId);
                const createResponse = await createCustomer(formData.email, token);
                if (createResponse) {
                    console.log('Cliente creado con éxito:', createResponse);
                } else {
                    setError('Error al crear el cliente.');
                }
            } else {
                setError('Error en la autenticación. Verifica tus credenciales.');
            }
        } catch (error: any) {
            setError(error.message || 'Hubo un error durante el proceso.');
        } finally {
            setLoading(false);
        }
    };
    return {
        loginAndCreateClient,
        loading,
        error,
    };
};
