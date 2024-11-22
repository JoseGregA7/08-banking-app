import { useState } from 'react';
import axios from 'axios';
import { SET_LOADING, SET_ERROR, SET_ACCOUNT_INFO } from '../state/status/actions'; 
import { useAppContext } from '../state/AppContext';

const useCreateAccount = () => {
    const { dispatch } = useAppContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createAccount = async (number: string, amount: string, clientId: string, token: string) => {
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
                number: number,
                amount: parseFloat(amount),
                customerId: clientId,
                createdAt: new Date().toISOString(),
            }
        };

        dispatch({ type: SET_LOADING, payload: true });
        dispatch({ type: SET_ERROR, payload: null });

        try {
            const response = await axios.post('/api/account/create', requestData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            const { dinBody, dinError } = response.data;

            // Verificamos si la cuenta se creó correctamente
            if (dinError && dinError.code === '0') {
                // Si la respuesta contiene los valores necesarios, actualizamos el estado
                dispatch({ type: SET_ACCOUNT_INFO, payload: dinBody });
                return { success: true, data: dinBody };
            } else {
                // Si los campos necesarios son nulos, consideramos que la operación falló
                setError('No se pudo crear la cuenta. Intenta nuevamente.');
                dispatch({ type: SET_ERROR, payload: 'Error en la creación de la cuenta' });
                return { success: false };
            }
        } catch (error) {
            console.error('Error en la creación de la cuenta:', error);
            setError('Hubo un error al crear la cuenta. Intenta nuevamente.');
            dispatch({ type: SET_ERROR, payload: 'Hubo un error al crear la cuenta. Intenta nuevamente.' });
            return { success: false };
        } finally {
            dispatch({ type: SET_LOADING, payload: false });
        }
    };

    return { createAccount, loading, error };
};

export default useCreateAccount;
