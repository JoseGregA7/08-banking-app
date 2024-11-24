import './style.scss';
const DepositOptions = ({ handleDepositTypeChange, handleDepositAmountChange, handleDepositSubmit, state }: { handleDepositTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleDepositAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleDepositSubmit: (e: React.FormEvent) => void, state: any }) => {
    return (
        <div className="DepositOptions__wrapper">
            <h3 className="DepositOptions__title">Formulario de Depósito</h3>
            <form onSubmit={handleDepositSubmit} className="DepositOptions__form">
                <div className="DepositOptions__field">
                    <label htmlFor="depositType" className="DepositOptions__label">Tipo de Depósito:</label>
                    <select
                        id="depositType"
                        value={state.depositType}
                        onChange={handleDepositTypeChange}
                        className="DepositOptions__select"
                    >
                        <option value="BRANCH">Depósito desde Sucursal</option>
                        <option value="ATM">Depósito desde Cajero</option>
                        <option value="ANOTHER_ACCOUNT">Depósito desde Otra Cuenta</option>
                    </select>
                </div>
                <div className="DepositOptions__field">
                    <label htmlFor="amount" className="DepositOptions__label">Cantidad a depositar:</label>
                    <input
                        id="amount"
                        type="number"
                        value={state.depositAmount}
                        onChange={handleDepositAmountChange}
                        min="0"
                        className="DepositOptions__input"
                    />
                </div>
                <button type="submit" className="DepositOptions__submitButton">Realizar Depósito</button>
            </form>
        </div>
    );
};


export default DepositOptions;
