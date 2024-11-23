import { useState } from 'react';
import './style.scss';
import axios from 'axios';
import { generateDinHeader } from '../../../core/utils/generateDinHeaders';

const DepositOptions = () => {
    const [depositType, setDepositType] = useState<string>('BRANCH');
    const [amount, setAmount] = useState<number>(0);

    const token = localStorage.getItem('token');
    const clientId = localStorage.getItem('clientId');

    const handleDepositTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDepositType(e.target.value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseFloat(e.target.value));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (token && clientId && amount !== 0) {
            const dinHeader = generateDinHeader();
            const dinBody = {
                id: "",
                amountCost: "",
                timestamp: "",
                amount: amount,
                type: depositType,
                accountId: clientId,
            };
            const requestData = {
                dinHeader,
                dinBody,
            };
            const response = await axios.post('/api/transaction/create', requestData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.data) {
                console.log('Compra exitosa:', response.data);
            } else {
                console.log('Error en la compra:', response.data);
            }
        };
    }

    return (
        <div className="DepositOptions__wrapper">
            <h3 className="DepositOptions__title">Formulario de Depósito</h3>
            <form onSubmit={handleSubmit} className="DepositOptions__form">
                <div className="DepositOptions__field">
                    <label htmlFor="depositType" className="DepositOptions__label">Tipo de Depósito:</label>
                    <select
                        id="depositType"
                        value={depositType}
                        onChange={handleDepositTypeChange}
                        className="DepositOptions__select"
                    >
                        <option value="BRANCH">Depósito desde Sucursal</option>
                        <option value="ATM">Depósito desde Cajero</option>
                        <option value="ANOTHER_ACCOUNT">Depósito desde Otra Cuenta</option>
                    </select>
                </div>
                <div className="DepositOptions__field">
                    <label htmlFor="amount" className="DepositOptions__label">Cantidad a depositar:</label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        min="0"
                        className="DepositOptions__input"
                    />
                </div>
                <button type="submit" className="DepositOptions__submitButton">Realizar Depósito</button>
            </form>
        </div>
    );
};

export default DepositOptions;
