import axios from "axios";
import { useAppContext } from "../state/AppContext";
import { generateDinHeader } from "../utils/generateDinHeaders";

const useBuy = () => {
    const token = localStorage.getItem('token');
    const clientId = localStorage.getItem('clientId');
    const { state } = useAppContext();
    const { buyAmount, buyType } = state;

    const handleBuy = async () => {
        const dinBody = {
            id: "",
            amountCost: "",
            timestamp: "",
            amount: buyAmount,
            type: buyType,
            accountId: clientId,
        };

        if (token && dinBody && dinBody.accountId && dinBody.amount < 0) {
            throw new Error('La cantidad a retirar debe ser mayor o igual a 0');
        }
        const requestData = {
            dinHeader: generateDinHeader(),
            dinBody,
        };
        try {
            const response = await axios.post('/api/transaction/create', requestData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.data) {
                console.log('Compra exitosa:', response.data);
                window.location.reload();
                return response.data;
            } else {
                console.log('Compra fallida:', response.data);
                return response.data;
            }
        } catch (error) {
            console.error('Error al realizar la operación:', error);
            return error;
        }
    };

    return { handleBuy };
};

export default useBuy;