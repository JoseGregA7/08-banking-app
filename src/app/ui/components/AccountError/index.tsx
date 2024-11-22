import { NavigateFunction } from "react-router-dom";
import './style.scss';

const AccountError = ({ error, navigate }: { error: string | null, navigate: NavigateFunction }) => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Mi Cuenta</h2>
            {error && <div> <div>Parece que aún no tienes una cuenta. </div> <button className="button" onClick={() => navigate('/create-account')}>Crear una cuenta</button></div>}
        </div>
    )
};

export default AccountError;