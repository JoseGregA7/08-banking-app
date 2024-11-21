import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import RegisterForm from '@ui/forms/RegisterForm';

interface SignUpData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const [formData, setFormData] = useState<SignUpData>({
        firstname: '',
        lastname: '',
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

        if (!formData.firstname || !formData.lastname || !formData.email || !formData.password) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        setLoading(true);
        setError(null);
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
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password,
                role: 'ROLE_USER'
            }

        };
        try {
            const response = await axios.post('/api/auth/register', requestData);
            if (response.data) {
                console.log('Registro exitoso:', response.data);
                navigate('/first-login');

            }
            console.log('Registro exitoso:', response.data);
        } catch (error) {
            console.error('Error en el registro:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LayoutMain>
            <BasicWrapper>
                <RegisterForm handleSubmit={handleSubmit} loading={loading} error={error} formData={formData} handleChange={handleChange} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default SignUp;
