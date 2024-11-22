import axios from 'axios';

export const generateDinHeader = () => ({
    device: 'device_value',
    language: 'en',
    uuid: 'random_uuid_value',
    ip: '192.168.1.1',
    transactionTime: new Date().toISOString(),
    symmetricalKey: 'key_value',
    initializationVector: 'vector_value',
});

export const authenticateUser = async (email: string, password: string) => {
    const requestData = {
        dinHeader: generateDinHeader(),
        dinBody: { email, password }
    };
    return axios.post('/api/auth/authenticate', requestData);
};


export const checkClientExists = async (clientId: string, token: string) => {
    const requestData = {
        dinHeader: generateDinHeader(),
        dinBody: { id: clientId }
    };

    return axios.post('/api/customer/get', requestData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};


export const fetchAccountData = async (clientId: string, token: string) => {
    const requestData = {
        dinHeader: generateDinHeader(),
        dinBody: {
            id: clientId,
            number: "",
            amount: null,
            customerId: null,
            createdAt: null
        }
    };

    return axios.post('/api/account/get', requestData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
