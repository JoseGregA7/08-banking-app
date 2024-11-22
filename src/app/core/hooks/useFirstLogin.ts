import { useState } from 'react';
import axios from 'axios';

interface FirstLoginData {
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

export const useFirstLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const loginAndCreateClient = async (formData: FirstLoginData) => {
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
            const responseData: ResponseData = response.data;

            if (responseData && responseData.dinBody.token) {
                console.log('Autenticación exitosa:', responseData);

                const token = responseData.dinBody.token;
                const clientId = responseData.dinBody.id;

                localStorage.setItem('token', token);
                localStorage.setItem('clientId', clientId);

                // Crear cliente
                const createCustomerData = {
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
                        name: formData.email
                    },
                };

                const createResponse = await axios.post('/api/customer/create', createCustomerData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (createResponse.data) {
                    console.log('Cliente creado con éxito:', createResponse.data);
                } else {
                    setError('Error al crear el cliente.');
                }
            } else {
                setError('Error en la autenticación. Verifica tus credenciales.');
            }
        } catch (error) {
            console.error('Error en el login o creación del cliente:', error);
            setError('Hubo un error al autenticar o crear el cliente. Intenta nuevamente.');
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
