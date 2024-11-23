import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import LoginForm from '@ui/forms/LoginForm';
import { useLogin } from '../../core/hooks/useLogin';
import { ILoginData } from '../../core/interfaces/request';

const Login = () => {
    const [formData, setFormData] = useState<ILoginData>({ email: '', password: '' });
    const navigate = useNavigate();
    const { loginUser, loading, error } = useLogin();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await loginUser(formData);

        if (!error) {
            navigate('/account');
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <LayoutMain>
            <BasicWrapper handleGoBack={handleGoBack}>
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

export default Login;
