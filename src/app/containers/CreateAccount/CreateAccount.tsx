import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import './style.scss';
import useCreateAccount from '../../core/hooks/useCreateAccount';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        number: '',
        amount: '',
    });
    const navigate = useNavigate();
    const { createAccount, loading, error } = useCreateAccount(); // Llamamos al hook de creación de cuenta
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const clientId = localStorage.getItem('clientId');

        if (!token || !clientId) {
            console.log(
                'No se pudo obtener el token o el clientId. Por favor, inicia sesión y vuelve a intentarlo.',
            );
            navigate('/login');
            return;
        }

        if (!formData.number || !formData.amount) {
            console.log('El número o el saldo no pueden ser vacíos');
            return;
        }

        const { success, data } = await createAccount(formData.number, formData.amount, clientId, token);

        if (success) {
            console.log('Cuenta creada exitosamente:', data);
            navigate('/account');
        }
    };
    return (
        <LayoutMain>
            <BasicWrapper>
                <h1>Crear Cuenta</h1>
                <div className="register__container">
                    <div className="register__container__title">Crear una nueva cuenta</div>
                    <form className="register__container__form" onSubmit={handleSubmit}>
                        <div className="register__container__form__input">
                            <label className="register__container__form__input__label">Número de Cuenta</label>
                            <input
                                className="register__container__form__input__input"
                                type="text"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="register__container__form__input">
                            <label className="register__container__form__input__label">Saldo Inicial</label>
                            <input
                                className="register__container__form__input__input"
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && <div className="register__container__error">{error}</div>}

                        <div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
                            </button>
                        </div>
                    </form>
                </div>
            </BasicWrapper>
        </LayoutMain>
    );
};

export default CreateAccount;
