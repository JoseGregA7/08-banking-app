import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import LoginForm from '@ui/forms/LoginForm';
import { useFirstLogin } from '../../core/hooks/useFirstLogin';
import { useGoBack } from '../../core/hooks/useGoBack';
import { useGoHome } from '../../core/hooks/useGoHome';
import { IFirstLoginData } from '../../core/interfaces/request';

const FirstLogin = () => {
    const [formData, setFormData] = useState<IFirstLoginData>({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { loginAndCreateClient, loading, error } = useFirstLogin(); // Usamos el hook
    const { handleGoBack } = useGoBack();
    const { handleEndSession } = useGoHome();

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
            <BasicWrapper handleGoBack={handleGoBack} handleEndSession={handleEndSession}>
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
