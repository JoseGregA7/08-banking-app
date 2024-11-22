import axios from "axios";
import { time } from "console";
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
            amount:50,
            type:"ATM",
            accountId:"673fe2ed2a1b0209c3c4e412",
        };

        const requestData = {
            dinHeader,
            dinBody,
        };
        const response = await axios.post('/api/transaction/create', requestData, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IlJPTEVfVVNFUiIsInN1YiI6ImNpbmNvQGdtYWlsLmNvbSIsImlhdCI6MTczMjI1MDk5OCwiZXhwIjoxNzMyMjUyNDM4fQ.d4GRcYaAhmned60TrC9eToIctbPzalZCPiruGwU7Elg`,
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