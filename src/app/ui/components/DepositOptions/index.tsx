import './style.scss';

const DepositOptions = ({
  handleDepositTypeChange,
  handleDepositAmountChange,
  handleDepositSubmit,
  state,
}: {
  handleDepositTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDepositAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDepositSubmit: (e: React.FormEvent) => void;
  state: any;
}) => {
  return (
    <div className="DepositOptions__wrapper" data-testid="deposit-options-wrapper">
      <h3 className="DepositOptions__title" id="deposit-form-title">
        Formulario de Depósito
      </h3>
      <form
        onSubmit={handleDepositSubmit}
        className="DepositOptions__form"
        aria-labelledby="deposit-form-title"
        data-testid="deposit-form"

      >
        <div className="DepositOptions__field">
          <label htmlFor="depositType" className="DepositOptions__label">
            Tipo de Depósito:
          </label>
          <select
            id="depositType"
            value={state.depositType}
            onChange={handleDepositTypeChange}
            className="DepositOptions__select"
            aria-label="Seleccionar el tipo de depósito"
            data-testid="deposit-type-select"
          >
            <option value="BRANCH">Depósito desde Sucursal</option>
            <option value="ATM">Depósito desde Cajero</option>
            <option value="ANOTHER_ACCOUNT">Depósito desde Otra Cuenta</option>
          </select>
        </div>
        <div className="DepositOptions__field">
          <label htmlFor="amount" className="DepositOptions__label">
            Cantidad a depositar:
          </label>
          <input
            id="amount"
            type="number"
            value={state.depositAmount}
            onChange={handleDepositAmountChange}
            min="0"
            className="DepositOptions__input"
            aria-label="Cantidad a depositar"
            data-testid="deposit-amount-input"
          />
        </div>
        <button
          type="submit"
          className="DepositOptions__submitButton"
          aria-label="Realizar depósito"
          data-testid="deposit-submit-button"
        >
          Realizar Depósito
        </button>
      </form>
    </div>
  );
};

export default DepositOptions;
