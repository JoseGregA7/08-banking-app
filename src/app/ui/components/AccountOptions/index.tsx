import './style.scss';
import SubOptions from '../AccountSubOptions';
const AccountOptions = ({ selectedOption, handleOptionClick, handleClose, handleWithdrawTypeChange, handleWithdrawalAmountChange, handleWithdrawalSubmit, state, handleDepositSubmit, handleDepositAmountChange, handleDepositTypeChange, handleBuySubmit, handleBuyAmountChange, handleBuyTypeChange }: { selectedOption: string | null, handleOptionClick: (option: string) => void, handleClose: () => void, handleWithdrawTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleWithdrawalAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleWithdrawalSubmit: (e: React.FormEvent) => void, state: any, handleDepositTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleDepositAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleDepositSubmit: (e: React.FormEvent) => void, handleBuyTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleBuyAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleBuySubmit: (e: React.FormEvent) => void }) => {
  return (
    <div className="Option__wrapper">
      <div className="Option__title">Opciones de la Cuenta</div>
      <div className="Option__container">
        <button name="option_button_depósitos" role="option_button_depósitos" aria-label="option_button_depósitos" className="Option__button" onClick={() => handleOptionClick('depositos')}>Depósitos</button>
        <button name="option_button_retiros" role="option_button_retiros" aria-label="option_button_retiros" className="Option__button" onClick={() => handleOptionClick('retiros')}>Retiros</button>
        <button name="option_button_compras" role="option_button_compras" aria-label="option_button_compras" className="Option__button" onClick={() => handleOptionClick('compras')}>Compras</button>
      </div>
      {
        selectedOption &&
        <div className='Option__close'>
          <div>
            <button name="cerrar" role="button" aria-label="Cerrar" onClick={handleClose}>x</button>
          </div>
        </div>
      }
      {selectedOption && <SubOptions option={selectedOption} handleWithdrawTypeChange={handleWithdrawTypeChange} handleWithdrawalAmountChange={handleWithdrawalAmountChange} handleWithdrawalSubmit={handleWithdrawalSubmit} state={state} handleDepositTypeChange={handleDepositTypeChange} handleDepositAmountChange={handleDepositAmountChange} handleDepositSubmit={handleDepositSubmit} handleBuyTypeChange={handleBuyTypeChange} handleBuyAmountChange={handleBuyAmountChange} handleBuySubmit={handleBuySubmit} />}
    </div>
  );
};

export default AccountOptions;
