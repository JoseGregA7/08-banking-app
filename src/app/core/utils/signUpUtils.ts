import axios from 'axios';
import { generateDinHeader } from './generateDinHeaders';

export const registerUser = async (formData: { firstname: string; lastname: string; email: string; password: string }) => {
    const dinHeader = generateDinHeader();
    const requestData = {
        dinHeader,
        dinBody: {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            password: formData.password,
            role: 'ROLE_USER',
        },
    };

    try {
        const response = await axios.post('/api/auth/register', requestData);
        return response.data;
    } catch (error) {
        console.error('Error en el registro:', error);
        throw new Error('Error en el registro. Intenta nuevamente.');
    }
};
