import { useState } from 'react';
import axios from 'axios';

interface SignUpData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

interface RequestData {
    dinHeader: {
        device: string;
        language: string;
        uuid: string;
        ip: string;
        transactionTime: string;
        symmetricalKey: string;
        initializationVector: string;
    };
    dinBody: SignUpData & { role: string };
}

interface ResponseData {
    dinHeader: {
        device: string;
        language: string;
        uuid: string;
        ip: string;
        transactionTime: string;
        symmetricalKey: string;
        initializationVector: string;
    };
    dinBody: {
        token: string | null;
        id: string | null;
    };
    dinError: {
        type: string;
        date: string;
        origin: string;
        code: string;
        codeErrorProvider: string;
        message: string;
        detail: string;
    };
}

export const useSignUp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<{ token: string | null; id: string | null }>({ token: null, id: null });

    const signUp = async (formData: SignUpData) => {
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.password) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        const requestData: RequestData = {
            dinHeader: {
                device: 'device_value',
                language: 'en',
                uuid: 'random_uuid_value',
                ip: '192.168.1.1',
                transactionTime: new Date().toISOString(),
                symmetricalKey: 'key_value',
                initializationVector: 'vector_value',
            },
            dinBody: {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password,
                role: 'ROLE_USER',
            },
        };

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/auth/register', requestData);
            const data: ResponseData = response.data;

            if (data.dinError.code === "0") {
                // Registro exitoso
                setUser({ token: data.dinBody.token, id: data.dinBody.id });
                return data;  // Aquí puedes retornar cualquier cosa, en este caso la respuesta completa
            } else {
                setError(data.dinError.message);
            }
        } catch (error: any) {
            setError('Error en el registro. Intenta nuevamente.');
            console.error('Error en el registro:', error);
        } finally {
            setLoading(false);
        }
    };

    return {
        signUp,
        loading,
        error,
        user,
    };
};
