import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import LoginForm from '@ui/forms/LoginForm';

interface FirstLoginData {
    email: string;
    password: string;
}

const FirstLogin = () => {
    const [formData, setFormData] = useState<FirstLoginData>({
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

        if (!formData.email || !formData.password) {
            setError('Email y contraseña son obligatorios.');
            return;
        }
        setLoading(true);
        setError(null);

        const createClient = async () => {
            const token = localStorage.getItem('token');
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
            try {
                const createResponse = await axios.post(
                    '/api/customer/create',
                    createCustomerData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (createResponse.data) {
                    console.log('Cliente creado con éxito:', createResponse.data);
                    navigate('/account');
                } else {
                    setError('Error al crear el cliente no catch.');
                    navigate('/account');
                }
            } catch (error) {
                console.error('Error al crear el cliente:', error);
                setError('Hubo un error al crear el cliente. Intenta nuevamente.');
                return console.log('Error al crear el cliente:', error);
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
                createClient();

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

export default FirstLogin;
