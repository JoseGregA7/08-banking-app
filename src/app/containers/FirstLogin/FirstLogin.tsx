import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import LoginForm from '@ui/forms/LoginForm';
import { useFirstLogin } from '../../core/hooks/useFirstLogin';

interface FirstLoginData {
    email: string;
    password: string;
}

const FirstLogin = () => {
    const [formData, setFormData] = useState<FirstLoginData>({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { loginAndCreateClient, loading, error } = useFirstLogin(); // Usamos el hook

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await loginAndCreateClient(formData);
        if (!error) {
            navigate('/account');
        }
    };

    return (
        <LayoutMain>
            <BasicWrapper>
                <LoginForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    loading={loading}
                    error={error}
                    formData={formData}
                />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default FirstLogin;
