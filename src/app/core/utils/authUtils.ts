import axios from 'axios';
import { generateDinHeader } from './generateDinHeaders';
import { IFirstLoginData, FirstLoginResponseData } from '../interfaces/request';
import { useNavigate } from 'react-router-dom';
import { useGoHome } from '../hooks/useGoHome';

export const authenticateUser = async (formData: IFirstLoginData): Promise<FirstLoginResponseData | null> => {
    const requestDataLogin = {
        dinHeader: generateDinHeader(),
        dinBody: {
            email: formData.email,
            password: formData.password,
        }
    };
    try {
        const response = await axios.post('/api/auth/authenticate', requestDataLogin);
        return response.data;
    } catch (error) {
        console.error('Error en la autenticación:', error);
        throw new Error('Error al autenticar al usuario.');
    }
};

export const createCustomer = async (email: string, token: string) => {
    const createCustomerData = {
        dinHeader: generateDinHeader(),
        dinBody: { name: email },
    };
    try {
        const createResponse = await axios.post('/api/customer/create', createCustomerData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return createResponse.data;
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        throw new Error('Error al crear el cliente.');
    }
};

export const isTokenExpired = (token: string) => {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));  // Decodificamos el payload del JWT
        const expirationDate = payload.exp * 1000;
        return expirationDate < Date.now();  // Compara la fecha de expiración con la fecha actual
    }

    return true;  // Si el token no es válido, lo tratamos como expirado
};

