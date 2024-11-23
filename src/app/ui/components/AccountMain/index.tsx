import AccountContent from '../AccountContent';
import AccountError from '../AccountError';
import Compras from '../Compras';
import './style.scss';

const AccountMain = ({ navigate, accountInfo, loading, error }: { navigate: any, accountInfo: any, loading: boolean, error: string | null }) => {
    return (
        <div className='AccountMain__wrapper'>
            <div className='AccountMain__title'>Mi Cuenta</div>
            {error && (
                <AccountError error={error} navigate={navigate} />
            )}
            {loading && <p>Cargando...</p>}

            {accountInfo && !loading && !error && (
                <AccountContent navigate={navigate} account={accountInfo} />
            )}
            {accountInfo && !loading && !error && (
                <Compras />
            )}
        </div>
    )
}

export default AccountMain;