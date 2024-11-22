import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usar el custom hook
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import RegisterForm from '@ui/forms/RegisterForm';
import { useSignUp } from '../../core/hooks/useSignUp';

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
    const navigate = useNavigate();
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
            <BasicWrapper>
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
