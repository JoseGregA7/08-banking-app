import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import './style.scss';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        number: '',
        amount: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Manejo de cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const clientId = localStorage.getItem('clientId');
        console.log('clientId en create', clientId, token);
        

        if (!token || !clientId) {
            setError('No estás autenticado. Por favor, inicia sesión.');
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
                number: formData.number,
                amount: parseFloat(formData.amount), 
                customerId: clientId, 
                createdAt: new Date().toISOString(),
            }
        };

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/account/create', requestData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                }
            });

            if (response.data) {
                console.log('Cuenta creada exitosamente:', response.data);
                navigate('/account');
            } else {
                setError('Hubo un error al crear la cuenta. Intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error al crear la cuenta:', error);
            setError('Hubo un error al crear la cuenta. Intenta nuevamente.');
        } finally {
            setLoading(false);
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
