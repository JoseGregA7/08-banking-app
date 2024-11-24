import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import RegisterForm from '@ui/forms/RegisterForm';
import { useSignUp } from '../../core/hooks/useSignUp';
import { ISignUpData } from '../../core/interfaces/request';
import { useGoBack } from '../../core/hooks/useGoBack';
import { useGoHome } from '../../core/hooks/useGoHome';

const SignUp = () => {
    const [formData, setFormData] = useState<ISignUpData>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const { handleGoBack } = useGoBack();
    const { handleEndSession } = useGoHome();
    const { signUp, loading, error } = useSignUp();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await signUp(formData);

        if (response) {
            console.log('Registro exitoso:', response);
            navigate('/first-login');
        }
    };

    return (
        <LayoutMain>
            <BasicWrapper handleGoBack={handleGoBack} handleEndSession={handleEndSession}>
                <RegisterForm
                    handleSubmit={handleSubmit}
                    loading={loading}
                    error={error}
                    formData={formData}
                    handleChange={handleChange}
                />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default SignUp;
