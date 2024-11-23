import { IAccountInfo } from '../../../core/interfaces/state';
import './style.scss';

interface AccountStatusProps {
    accountInfo: IAccountInfo | null;
}

const labelMapping = {
    number: 'Número de Cuenta',
    amount: 'Saldo Actual',
    createdAt: 'Fecha de Creación',
};

const AccountStatus = ({ accountInfo }: AccountStatusProps ) => {
    const filteredData = accountInfo ? Object.entries(accountInfo)
        .filter(([key, value]) => value !== null)
        .map(([key, value]) => {
            const label = labelMapping[key as keyof typeof labelMapping] || key;
            return [label, value];
        }) : [];

    return (
        <div className='AccountStatus__wrapper'>
            <div className='AccountStatus__main'>
                <div className='AccountStatus__title'>Estado de la Cuenta</div>
                <div className='AccountStatus__content'>
                    {filteredData.length === 0 ? (
                        <div>No hay datos disponibles.</div>
                    ) : (
                        <ul className='AccountStatus__list'>
                            {filteredData.map(([label, value]) => (
                                <li className='AccountStatus__item' key={label}>
                                    <strong>{label}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountStatus;
