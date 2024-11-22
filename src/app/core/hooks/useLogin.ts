import { useState } from 'react';
import axios from 'axios';

interface LoginData {
    email: string;
    password: string;
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
        token: string;
        id: string;
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

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAccount = async ({ clientId, token }: { clientId: string | null, token: string | null }) => {
        if (!token || !clientId) {
            setError('No estás autenticado o no se encontró el ID del cliente.');
            return;
        }

        const requestData = {
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
                id: clientId,
                number: "",
                amount: null,
                customerId: null,
                createdAt: null
            }
        };

        try {
            const response = await axios.post('/api/account/get', requestData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.data) {
                console.log('Datos de cuenta obtenidos:', response.data);
            }
        } catch (error) {
            console.error('Error al obtener los datos de la cuenta:', error);
            setError('Hubo un error al obtener los datos de la cuenta. Intenta nuevamente más tarde.');
        }
    };

    const checkIfClientExists = async (clientId: string | null) => {
        if (!clientId) {
            setError('No estás autenticado o no se encontró el ID del cliente.');
            return false;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                '/api/customer/get',
                {
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
                        id: clientId
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response) {
                console.log('Cliente encontrado:', response.data);
                return true;
            }
        } catch (error) {
            console.error('Error al verificar el cliente:', error);
            return false;
        }
    };

    const loginUser = async (formData: LoginData) => {
        if (!formData.email || !formData.password) {
            setError('Email y contraseña son obligatorios.');
            return;
        }

        setLoading(true);
        setError(null);

        const requestDataLogin = {
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
                email: formData.email,
                password: formData.password,
            }
        };

        try {
            const response = await axios.post('/api/auth/authenticate', requestDataLogin);

            if (response.data) {
                const token = response.data.dinBody.token;
                const clientId = response.data.dinBody.id;
                localStorage.setItem('token', token);
                localStorage.setItem('clientId', clientId);

                const clientExists = await checkIfClientExists(clientId);
                if (clientExists) {
                    fetchAccount({ clientId, token });
                }
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
