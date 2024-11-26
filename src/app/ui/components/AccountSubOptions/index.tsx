import BuyOptions from "../BuyOptions";
import DepositOptions from "../DepositOptions";
import WithdrawalOptions from "../WithdrawalOptions";

const SubOptions = ({ option, handleWithdrawTypeChange, handleWithdrawalAmountChange, handleWithdrawalSubmit, state, handleDepositSubmit, handleDepositAmountChange, handleDepositTypeChange, handleBuySubmit, handleBuyAmountChange, handleBuyTypeChange }: { option: string, handleWithdrawTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleWithdrawalAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleWithdrawalSubmit: (e: React.FormEvent) => void, state: any, handleDepositTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleDepositAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleDepositSubmit: (e: React.FormEvent) => void, handleBuyTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleBuyAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleBuySubmit: (e: React.FormEvent) => void }) => {
  switch (option) {
    case 'depositos':
      return <DepositOptions handleDepositTypeChange={handleDepositTypeChange} handleDepositAmountChange={handleDepositAmountChange} handleDepositSubmit={handleDepositSubmit} state={state} />;
    case 'retiros':
      return <WithdrawalOptions handleWithdrawTypeChange={handleWithdrawTypeChange} handleWithdrawalAmountChange={handleWithdrawalAmountChange} handleWithdrawalSubmit={handleWithdrawalSubmit} state={state} />;
    case 'compras':
      return <BuyOptions handleBuyTypeChange={handleBuyTypeChange} handleBuyAmountChange={handleBuyAmountChange} handleBuySubmit={handleBuySubmit} state={state} />;
    default:
      return null;
  }
};

export default SubOptions;