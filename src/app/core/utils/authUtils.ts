import axios from 'axios';
import { generateDinHeader } from './generateDinHeaders';
import { IFirstLoginData, FirstLoginResponseData } from '../interfaces/request';

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
