import { NavigateFunction } from "react-router-dom";
import './style.scss';

const AccountError = ({ error, navigate }: { error: string | null, navigate: NavigateFunction }) => {
    return (
        <div
            style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}
            role="alert"
            aria-live="assertive"
            data-testid="account-error-container"
        >
            <h2
                title="Account Section"
                aria-label="Account Overview"
            >
                Mi Cuenta
            </h2>
            {error && (
                <div
                    role="region"
                    aria-labelledby="error-message"
                    data-testid="account-error-message"
                >
                    <div
                        id="error-message"
                        aria-live="assertive"
                        aria-atomic="true"
                    >
                        Parece que aún no tienes una cuenta.
                    </div>
                    <button
                        className="button"
                        onClick={() => navigate('/create-account')}
                        title="Crear cuenta"
                        aria-label="Crear una cuenta"
                        data-testid="create-account-button"
                    >
                        Crear una cuenta
                    </button>
                </div>
            )}
        </div>
    );
};

export default AccountError;
