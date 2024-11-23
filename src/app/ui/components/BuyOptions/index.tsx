import { useState } from 'react';
import './style.scss';
import axios from 'axios';
import { generateDinHeader } from '../../../core/utils/generateDinHeaders';

const BuyOptions = () => {
    const [purchaseType, setPurchaseType] = useState<string>('PHYSICAL_ESTABLISHMENT');
    const [amount, setAmount] = useState<number>(0);

    const token = localStorage.getItem('token');
    const clientId = localStorage.getItem('clientId');

    // Manejo del cambio en el tipo de compra
    const handlePurchaseTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPurchaseType(e.target.value);
    };

    // Manejo del cambio en la cantidad de compra
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
                amountCost: "", // Asumimos que el backend se encarga de calcular el costo
                timestamp: "",
                amount: amount,
                type: purchaseType, // Aquí pasamos el tipo de compra
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
        <div className="BuyOptions__wrapper">
            <h3 className="BuyOptions__title">Formulario de Compras</h3>
            <form onSubmit={handleSubmit} className="BuyOptions__form">
                {/* Selección de tipo de compra */}
                <div className="BuyOptions__field">
                    <label htmlFor="purchaseType" className="BuyOptions__label">Tipo de Compra:</label>
                    <select
                        id="purchaseType"
                        value={purchaseType}
                        onChange={handlePurchaseTypeChange}
                        className="BuyOptions__select"
                    >
                        <option value="PHYSICAL_ESTABLISHMENT"> En Establecimiento Físico</option>
                        <option value="WEB_PAGE">En la Página Web</option>
                    </select>
                </div>

                {/* Campo de cantidad a comprar */}
                <div className="BuyOptions__field">
                    <label htmlFor="amount" className="BuyOptions__label">Cantidad a comprar:</label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        min="0"
                        className="BuyOptions__input"
                    />
                </div>

                {/* Botón de envío */}
                <button type="submit" className="BuyOptions__submitButton">Realizar Compra</button>
            </form>
        </div>
    );
};

export default BuyOptions;
