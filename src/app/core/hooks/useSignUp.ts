import { useState } from 'react';
import { IResponseData, ISignUpData } from '../interfaces/request';
import { registerUser } from '../utils/signUpUtils';

export const useSignUp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<{ token: string | null; id: string | null }>({ token: null, id: null });

    const signUp = async (formData: ISignUpData) => {
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.password) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const data: IResponseData = await registerUser(formData);
            if (data.dinError.code === "0") {
                setUser({ token: data.dinBody.token, id: data.dinBody.id });
                return data;
            } else {
                setError(data.dinError.message);
            }
        } catch (error: any) {
            setError(error.message || 'Error en el registro. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return {
        signUp,
        loading,
        error,
        user,
    };
};
