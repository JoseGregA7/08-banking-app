import './style.scss';

const WithdrawOptions = ({
  handleWithdrawTypeChange,
  handleWithdrawalAmountChange,
  handleWithdrawalSubmit,
  state,
}: {
  handleWithdrawTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleWithdrawalAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWithdrawalSubmit: (e: React.FormEvent) => void;
  state: any;
}) => {
  return (
    <div className="WithdrawOptions__wrapper" data-testid="withdraw-options-wrapper">
      <h3 className="WithdrawOptions__title" id="withdraw-form-title">
        Formulario de Retiro
      </h3>
      <form
        onSubmit={handleWithdrawalSubmit}
        className="WithdrawOptions__form"
        aria-labelledby="withdraw-form-title"
      >
        <div className="WithdrawOptions__field">
          <label htmlFor="withdrawType" className="WithdrawOptions__label">
            Tipo de Retiro:
          </label>
          <select
            id="withdrawType"
            value={state.withdrawalType}
            onChange={handleWithdrawTypeChange}
            className="WithdrawOptions__select"
            aria-label="Seleccionar el tipo de retiro"
            data-testid="withdraw-type-select"
          >
            <option value="ATM_WITHDRAWAL">Retiro desde Cajero</option>
            <option value="OTHER_WITHDRAWAL">Otro tipo de retiro</option>
          </select>
        </div>
        <div className="WithdrawOptions__field">
          <label htmlFor="withdrawalAmount" className="WithdrawOptions__label">
            Cantidad a retirar:
          </label>
          <input
            id="withdrawalAmount"
            type="number"
            value={state.withdrawalAmount}
            onChange={handleWithdrawalAmountChange}
            min="0"
            className="WithdrawOptions__input"
            aria-label="Cantidad a retirar"
            data-testid="withdraw-amount-input"
          />
        </div>
        <button
          type="submit"
          className="WithdrawOptions__submitButton"
          aria-label="Realizar retiro"
          data-testid="withdraw-submit-button"
        >
          Realizar Retiro
        </button>
      </form>
    </div>
  );
};

export default WithdrawOptions;
