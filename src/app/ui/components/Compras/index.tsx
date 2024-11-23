import axios from "axios";
import { useState } from "react";

const Compras = () => {
    const [buyType, setBuyType] = useState<string>('');
    const [formData, setFormData] = useState({
        amount: '50',
    });
    const handleBuyType = (type: string) => {
        setBuyType(type);
    }

    const handleBuy = async () => {
        const dinHeader = {
            device: 'device_value',
            language: 'en',
            uuid: 'random_uuid_value',
            ip: '192.168.1.1',
            transactionTime: new Date().toISOString(),
            symmetricalKey: 'key_value',
            initializationVector: 'vector_value',
        };
        const dinBody = {
            id: "",
            amountCost: "",
            timestamp: "",
            amount:"5",
            type:"ATM",
            accountId:"67409a7db175195bc6753de9",
        };

        const requestData = {
            dinHeader,
            dinBody,
        };
        const response = await axios.post('/api/transaction/create', requestData, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IlJPTEVfVVNFUiIsInN1YiI6InRyZWNlQGdtYWlsLmNvbSIsImlhdCI6MTczMjI4NzEwNywiZXhwIjoxNzMyMjg4NTQ3fQ.KyNZca4CQOLF1HMyir5becoN5lzq5YcGfZBsG6jjpAA`,
            }
        });
        if (response.data) {
            console.log('Compra exitosa:', response.data);
        } else {
            console.log('Error en la compra:', response.data);
        }
        console.log('Comprar');
    }
    return (
        <div>
            <button onClick={() => handleBuyType('Establecimiento Fisico')}>Comprar en un Establecimiento Fisico</button>
            <button onClick={() => handleBuyType('pagina web')}>Comprar enuna pagina web</button>
            {
                buyType === '' && <div>Selecciona una opción</div>
            }
            {
                buyType === 'Establecimiento Fisico' &&
                <div>
                    <form>
                        <title>Comprar en un Establecimiento Fisico</title>
                        <input type="text" placeholder="Ingrese el número de la cuenta" />
                        <input type="text" placeholder="Ingrese la cantidad" />
                        <button onClick={handleBuy}>Comprar</button>
                        <button>Cancelar</button>
                        <button>Cerrar</button>
                        <div>Saldo disponible: 1000</div>
                    </form>
                </div>
            }
            {
                buyType === 'pagina web' &&
                <div>
                    pagina web
                    <input type="text" placeholder="Ingrese el número de la cuenta" />
                    <input type="text" placeholder="Ingrese la cantidad" />
                    <button onClick={handleBuy}>Comprar</button>
                    <button>Cancelar</button>
                    <button>Cerrar</button>
                    <div>Saldo disponible: 1000</div>
                </div>
            }

        </div>
    )
}

export default Compras;