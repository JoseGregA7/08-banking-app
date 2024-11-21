import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import AccountContent from '@ui/components/AccountContent';
import AccountError from '@ui/components/AccountError';
import AccountOptions from '@ui/components/AccountOptions';

const Account = () => {
    const [account, setAccount] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccount = async () => {
            const token = localStorage.getItem('token');
            const clientId = localStorage.getItem('clientId');
            console.log('clientId', clientId);

            if (!token || !clientId) {
                setError('No estás autenticado o no se encontró el ID del cliente.');
                navigate('/login');
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
                setLoading(true);
                const response = await axios.post('/api/account/get', requestData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (response.data) {
                    console.log('response.data greg account', response.data);
                    setAccount(response.data.dinBody);
                }
            } catch (error) {
                console.error('Error al obtener los datos de la cuenta:', error);
                setError('Hubo un error al obtener los datos de la cuenta. Intenta nuevamente más tarde.');

            } finally {
                setLoading(false);
            }
        };

        fetchAccount();
    }, [navigate]);

    const renderAccountInfo = () => {
        if (loading) return <p>Cargando...</p>;
        if (!account) return <></>;
        return (
            <AccountContent navigate={navigate} account={account} />
        );
    };
    return (
        <LayoutMain>
            <BasicWrapper>
                <AccountError error={error} renderAccountInfo={renderAccountInfo} navigate={navigate} />
                {
                    account &&
                    <AccountOptions />
                }
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Account;
