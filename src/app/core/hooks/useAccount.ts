import { useEffect } from 'react';
import axios from 'axios';
import { SET_ACCOUNT_INFO, SET_ERROR, SET_LOADING } from '../state/status/actions';  // Asegúrate de que la ruta sea correcta
import { useAppContext } from '../state/AppContext';

const useAccount = () => {
    const { state, dispatch } = useAppContext();
    const { accountInfo, loading, error } = state;
    console.log('test info on hook',accountInfo);

    useEffect(() => {
        console.log('test info on useeffect',accountInfo);
        const fetchAccount = async () => {
            const token = localStorage.getItem('token');
            const clientId = localStorage.getItem('clientId');

            if (!token || !clientId) {
                dispatch({ type: SET_ERROR, payload: 'No estás autenticado o no se encontró el ID del cliente.' });
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
                    id: clientId,
                    number: null,
                    amount: null,
                    customerId: null,
                    createdAt: null
                }
            };

            try {
                dispatch({ type: SET_LOADING, payload: true });

                const response = await axios.post('/api/account/get', requestData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (response.data) {
                    dispatch({ type: SET_ACCOUNT_INFO, payload: response.data.dinBody });
                }
            } catch (error) {
                dispatch({ type: SET_ERROR, payload: 'Hubo un error al obtener los datos de la cuenta. Intenta nuevamente más tarde.' });
            } finally {
                dispatch({ type: SET_LOADING, payload: false });
            }
        };

        fetchAccount();
    }, [dispatch]);

    console.log('test info on hook',accountInfo);

    return { accountInfo, loading, error };
};

export default useAccount;
