import './style.scss';
const WithdrawOptions = ({ handleWithdrawTypeChange, handleWithdrawalAmountChange, handleWithdrawalSubmit, state }: { handleWithdrawTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleWithdrawalAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleWithdrawalSubmit: (e: React.FormEvent) => void, state: any }) => {

  return (
    <div className="WithdrawOptions__wrapper">
      <h3 className="WithdrawOptions__title">Formulario de Retiro</h3>
      <form onSubmit={handleWithdrawalSubmit} className="WithdrawOptions__form">
        <div className="WithdrawOptions__field">
          <label htmlFor="withdrawType" className="WithdrawOptions__label">Tipo de Retiro:</label>
          <select
            id="withdrawType"
            value={state.withdrawalType}
            onChange={handleWithdrawTypeChange}
            className="WithdrawOptions__select"
          >
            <option value="ATM_WITHDRAWAL">Retiro desde Cajero</option>
            <option value="ATM_WITHDRAWAL">Retiro desde Cajero</option>
          </select>
        </div>
        <div className="WithdrawOptions__field">
          <label htmlFor="withdrawalAmount" className="WithdrawOptions__label">Cantidad a retirar:</label>
          <input
            id="withdrawalAmount"
            type="number"
            value={state.withdrawalAmount}
            onChange={handleWithdrawalAmountChange}
            min="0"
            className="WithdrawOptions__input"
          />
        </div>
        <button type="submit" className="WithdrawOptions__submitButton">Realizar Retiro</button>
      </form>
    </div>
  );
};

export default WithdrawOptions;
