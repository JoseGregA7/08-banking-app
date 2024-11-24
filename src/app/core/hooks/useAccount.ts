import { useEffect } from 'react';
import axios from 'axios';
import { SET_ACCOUNT_INFO, SET_ERROR, SET_LOADING } from '../state/status/actions';
import { useAppContext } from '../state/AppContext';
import { generateDinHeader } from '../utils/loginUtils';


const useAccount = () => {
    const { state, dispatch } = useAppContext();
    const { accountInfo, loading, error } = state;
    const token = localStorage.getItem('token');
    const clientId = localStorage.getItem('clientId');
    const requestData = {
        dinHeader: generateDinHeader(),
        dinBody: {
            id: clientId,
            number: null,
            amount: null,
            customerId: null,
            createdAt: null
        }
    }
    useEffect(() => {
        const getAccount = async () => {
            if (!token || !clientId) {
                dispatch({ type: SET_ERROR, payload: 'No estás autenticado o no se encontró el ID del cliente.' });
                return;
            }
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
        getAccount();
    }, [dispatch]);
    return { accountInfo, loading, error };
};

export default useAccount;
