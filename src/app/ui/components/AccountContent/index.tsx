import { NavigateFunction } from 'react-router-dom';
import './style.scss';
import AccountStatus from '../AccountStatus';


const AccountContent = ({ navigate, account }: { navigate: NavigateFunction, account: { amount: number, id: number, name: string } }) => {
    return (
        <div className='AccountContent__container'>
            <AccountStatus accountInfo={account} />
            <div className='AccountContent__divider'>|
                <button className='button' onClick={() => navigate('/')}>Transacciones</button>
                <span className='AccountContent__divider'>|</span>
                <button className='button' onClick={() => navigate('/operations')}>Operaciones</button>
            </div>
        </div>)
}
export default AccountContent;