import { LABEL_MAPPING } from '../../../core/constants/account';
import { AccountStatusProps } from '../../../core/interfaces/state';
import './style.scss';

const AccountStatus = ({ accountInfo }: AccountStatusProps) => {
    const filteredData = accountInfo
        ? Object.entries(accountInfo)
            .filter(([key, value]) => value !== null)
            .map(([key, value]) => {
                const label = LABEL_MAPPING[key as keyof typeof LABEL_MAPPING] || key;
                return [label, value];
            })
        : [];

    return (
        <div
            className="AccountStatus__wrapper"
            role="region"
            aria-labelledby="account-status-title"
            data-testid="account-status-wrapper"
        >
            <div className="AccountStatus__main">
                <h2
                    id="account-status-title"
                    className="AccountStatus__title"
                    title="Estado de la Cuenta"
                    aria-label="Estado de la Cuenta"
                    data-testid="account-status-title"
                >
                    Estado de la Cuenta
                </h2>
                <div className="AccountStatus__content">
                    {filteredData.length === 0 ? (
                        <div
                            role="alert"
                            aria-live="assertive"
                            data-testid="account-status-no-data"
                        >
                            No hay datos disponibles.
                        </div>
                    ) : (
                        <ul className="AccountStatus__list" role="list" aria-labelledby="account-status-list">
                            {filteredData.map(([label, value]) => (
                                <li className="AccountStatus__item" key={label} role="listitem">
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
