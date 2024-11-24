import axios from "axios";
import { useAppContext } from "../state/AppContext";
import { generateDinHeader } from "../utils/generateDinHeaders";

const useWithdrawal = () => {
    const token = localStorage.getItem('token');
    const clientId = localStorage.getItem('clientId');
    const { state } = useAppContext();
    const { withdrawalAmount, withdrawalType } = state;

    const handleWithdrawal = async () => {
        const dinBody = {
            id: "",
            amountCost: "",
            timestamp: "",
            amount: withdrawalAmount,
            type: withdrawalType,
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
                console.log('Retiro exitoso:', response.data);
                window.location.reload();
                return response.data;
            } else {
                console.log('Error en el retiro:', response.data);
                return response.data;
            }
        } catch (error) {
            console.error('Error al realizar la operación:', error);
            return error;
        }
    };
    return { handleWithdrawal };
};

export default useWithdrawal;