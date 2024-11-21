import { NavigateFunction } from 'react-router-dom';
import './style.scss';


const AccountContent = ({ navigate, account }: { navigate: NavigateFunction, account: { amount: number, id: number, name: string } }) => {
    return (
        <div>
            <div>
                <h4>Detalles de la Cuenta:</h4>
                <p>Saldo: {account.amount}</p>
                <button className='button' onClick={() => navigate('/transactions')}>Ver transacciones</button>
            </div>
        </div>
    )
}
export default AccountContent;