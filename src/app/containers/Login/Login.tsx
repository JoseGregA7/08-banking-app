import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import LoginForm from '@ui/forms/LoginForm';


interface LoginData {
    email: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const clientId = localStorage.getItem('clientId');
        console.log('clientId before', clientId);

        if (!formData.email || !formData.password) {
            setError('Email y contraseña son obligatorios.');
            return;
        }

        setLoading(true);
        setError(null);

        const fetchAccount = async ({clientId, token}: { clientId: string | null, token: string | null }) => {
            console.log('clientId', clientId);


            if (!token || !clientId) {
                setError('No estás autenticado o no se encontró el ID del cliente.');
                navigate('/login');
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
                setLoading(true);
                const response = await axios.post('/api/account/get', requestData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (response.data) {
                    console.log('response.data greg account', response.data);
                }
            } catch (error) {
                console.error('Error al obtener los datos de la cuenta cuenta:', error);
                setError('Hubo un error al obtener los datos de la cuenta. Intenta nuevamente más tarde.');

            } finally {
                setLoading(false);
            }
        };

        const checkIfClientExists = async (clientId: string | null) => {
            if (!clientId) {
                setError('No estás autenticado o no se encontró el ID del cliente.');
                navigate('/login');
                return;
            }
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(
                    '/api/customer/get',
                    {
                        dinHeader: {
                            device: 'device_value',
                            language: 'en',
                            uuid: 'random_uuid_value',  // UUID dinámico
                            ip: '192.168.1.1',
                            transactionTime: new Date().toISOString(),
                            symmetricalKey: 'key_value',
                            initializationVector: 'vector_value',
                        },
                        dinBody: {
                            id: clientId // Usamos el ID del cliente para verificar existencia
                        }
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response) {
                    console.log('response.data greg', response.data);
                    return true
                }
            } catch (error) {
                console.error('Error al verificar el cliente:', error);
                return false;  // Si hay un error, asumimos que el cliente no existe
            }
        }

        

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
            console.log('response.data', response.data);
            if (response.data) {
                console.log('Autenticación exitosa:', response.data);
                const token = response.data.dinBody.token;
                const clientId = response.data.dinBody.id;
                localStorage.setItem('token', token);
                localStorage.setItem('clientId', clientId);
                const clientExists = await checkIfClientExists(clientId);
                console.log('clientExists', clientExists);
                if(clientExists) {
                    console.log('clientExists', clientExists);
                    fetchAccount({clientId, token});
                    
                }
                // const createCustomerData = {
                //     dinHeader: {
                //         device: 'device_value',
                //         language: 'en',
                //         uuid: 'random_uuid_value',
                //         ip: '192.168.1.1',
                //         transactionTime: new Date().toISOString(),
                //         symmetricalKey: 'key_value',
                //         initializationVector: 'vector_value',
                //     },
                //     dinBody: {
                //         name: formData.email
                //     },
                // };
                // try {
                //     const createResponse = await axios.post(
                //         '/api/customer/create',
                //         createCustomerData,
                //         {
                //             headers: {
                //                 Authorization: `Bearer ${token}`,
                //             },
                //         }
                //     );

                //     if (createResponse.data) {
                //         console.log('Cliente creado con éxito:', createResponse.data);
                //         navigate('/account');
                //     } else {
                //         setError('Error al crear el cliente.');
                //         navigate('/account');
                //     }
                // } catch (error) {
                //     console.error('Error al crear el cliente:', error);
                //     setError('Hubo un error al crear el cliente. Intenta nuevamente.');
                // }
            }

        } catch (error) {
            console.error('Error en el login:', error);
            setError('Hubo un error al autenticar al usuario. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LayoutMain>
            <BasicWrapper>
                <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} loading={loading} error={error} formData={formData} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Login;
