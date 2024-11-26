import './style.scss';
import SubOptions from '../AccountSubOptions';

const AccountOptions = ({
  selectedOption,
  handleOptionClick,
  handleClose,
  handleWithdrawTypeChange,
  handleWithdrawalAmountChange,
  handleWithdrawalSubmit,
  state,
  handleDepositSubmit,
  handleDepositAmountChange,
  handleDepositTypeChange,
  handleBuySubmit,
  handleBuyAmountChange,
  handleBuyTypeChange,
}: {
  selectedOption: string | null;
  handleOptionClick: (option: string) => void;
  handleClose: () => void;
  handleWithdrawTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleWithdrawalAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWithdrawalSubmit: (e: React.FormEvent) => void;
  state: any;
  handleDepositTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDepositAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDepositSubmit: (e: React.FormEvent) => void;
  handleBuyTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBuyAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBuySubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <div
      className="Option__wrapper"
      role="region"
      aria-labelledby="account-options-title"
      data-testid="account-options-wrapper"
    >
      <h2
        id="account-options-title"
        className="Option__title"
        title="Opciones de la Cuenta"
        aria-label="Opciones de la Cuenta"
        data-testid="account-options-title"
      >
        Opciones de la Cuenta
      </h2>

      <div className="Option__container">
        <button
          name="option_button_depósitos"
          role="button"
          aria-label="Depósitos"
          className="Option__button"
          onClick={() => handleOptionClick('depositos')}
          data-testid="account-option-deposit"
        >
          Depósitos
        </button>

        <button
          name="option_button_retiros"
          role="button"
          aria-label="Retiros"
          className="Option__button"
          onClick={() => handleOptionClick('retiros')}
          data-testid="account-option-withdraw"
        >
          Retiros
        </button>

        <button
          name="option_button_compras"
          role="button"
          aria-label="Compras"
          className="Option__button"
          onClick={() => handleOptionClick('compras')}
          data-testid="account-option-purchases"
        >
          Compras
        </button>
      </div>

      {selectedOption && (
        <div className="Option__close" aria-live="polite" data-testid="account-close-button">
          <div>
            <button
              name="cerrar"
              role="button"
              aria-label="Cerrar"
              onClick={handleClose}
            >
              x
            </button>
          </div>
        </div>
      )}

      {selectedOption && (
        <SubOptions
          option={selectedOption}
          handleWithdrawTypeChange={handleWithdrawTypeChange}
          handleWithdrawalAmountChange={handleWithdrawalAmountChange}
          handleWithdrawalSubmit={handleWithdrawalSubmit}
          state={state}
          handleDepositTypeChange={handleDepositTypeChange}
          handleDepositAmountChange={handleDepositAmountChange}
          handleDepositSubmit={handleDepositSubmit}
          handleBuyTypeChange={handleBuyTypeChange}
          handleBuyAmountChange={handleBuyAmountChange}
          handleBuySubmit={handleBuySubmit}
          data-testid="account-sub-options"
        />
      )}
    </div>
  );
};

export default AccountOptions;
