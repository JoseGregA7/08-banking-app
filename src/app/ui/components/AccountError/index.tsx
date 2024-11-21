import { NavigateFunction } from "react-router-dom";
import './style.scss';

const AccountError = ({ error, renderAccountInfo, navigate }: { error: string | null, renderAccountInfo: () => JSX.Element, navigate: NavigateFunction }) => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Mi Cuenta</h2>
            {error && <div> <div>Parece que aún no tienes una cuenta. </div> <button className="button" onClick={() => navigate('/create-account')}>Crear una cuenta</button></div>}
            {renderAccountInfo()}
        </div>
    )
};

export default AccountError;