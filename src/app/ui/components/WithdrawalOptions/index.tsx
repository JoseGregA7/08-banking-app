import { useState } from 'react';
import './style.scss';  // Asegúrate de que este archivo sea el correcto
import axios from 'axios';
import { generateDinHeader } from '../../../core/utils/generateDinHeaders';

const WithdrawOptions = () => {
  // Estado para el tipo de retiro y la cantidad
  const [withdrawType, setWithdrawType] = useState<string>('ATM_WITHDRAWAL');
  const [amount, setAmount] = useState<number>(0);

  // Obtención de token y clientId desde el almacenamiento local
  const token = localStorage.getItem('token');
  const clientId = localStorage.getItem('clientId');

  // Manejo del cambio en el tipo de retiro
  const handleWithdrawTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWithdrawType(e.target.value);
  };

  // Manejo del cambio en la cantidad a retirar
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };

  // Manejo de la suma del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (token && clientId && amount !== 0) {
      const dinHeader = generateDinHeader();
      const dinBody = {
        id: "",
        amountCost: "",
        timestamp: "",
        amount: amount,
        type: withdrawType,
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
        console.log('Retiro exitoso:', response.data);
      } else {
        console.log('Error en el retiro:', response.data);
      }
    };
  }

  return (
    <div className="WithdrawOptions__wrapper">
      <h3 className="WithdrawOptions__title">Formulario de Retiro</h3>
      <form onSubmit={handleSubmit} className="WithdrawOptions__form">
        <div className="WithdrawOptions__field">
          <label htmlFor="withdrawType" className="WithdrawOptions__label">Tipo de Retiro:</label>
          <select
            id="withdrawType"
            value={withdrawType}
            onChange={handleWithdrawTypeChange}
            className="WithdrawOptions__select"
          >
            <option value="ATM_WITHDRAWAL">Retiro desde Cajero</option>
          </select>
        </div>
        <div className="WithdrawOptions__field">
          <label htmlFor="amount" className="WithdrawOptions__label">Cantidad a retirar:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0"
            className="WithdrawOptions__input"
          />
        </div>
        <button type="submit" className="WithdrawOptions__submitButton">Realizar Retiro</button>
      </form>
    </div>
  );
};

export default WithdrawOptions;
