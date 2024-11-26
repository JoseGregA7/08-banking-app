import AccountContent from '../AccountContent';
import AccountError from '../AccountError';
import './style.scss';

const AccountMain = ({
    navigate,
    accountInfo,
    loading,
    error,
}: {
    navigate: any;
    accountInfo: any;
    loading: boolean;
    error: string | null;
}) => {
    console.log('accountInfo', accountInfo);

    return (
        <div
            className="AccountMain__wrapper"
            role="main"
            aria-live="polite"
            data-testid="account-main-container"
        >
            <div
                className="AccountMain__title"
                title="Account Page"
                aria-label="Mi Cuenta"
                data-testid="account-main-title"
            >
                Mi Cuenta
            </div>

            {error && (
                <AccountError
                    error={error}
                    navigate={navigate}
                    data-testid="account-error"
                    aria-live="assertive"
                />
            )}

            {loading && (
                <p
                    role="status"
                    aria-live="polite"
                    data-testid="account-loading"
                >
                    Cargando...
                </p>
            )}
            {accountInfo && !loading && !error && (
                <AccountContent
                    navigate={navigate}
                    account={accountInfo}
                    data-testid="account-content"
                    aria-labelledby="account-info"
                />
            )}
        </div>
    );
};

export default AccountMain;
