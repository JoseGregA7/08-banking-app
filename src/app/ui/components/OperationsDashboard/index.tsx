import AccountOptions from "../AccountOptions";
import AccountStatus from "../AccountStatus";
import './style.scss';

const OperationsDashboard = ({ accountInfo, handleWithdrawTypeChange, handleWithdrawalAmountChange, handleWithdrawalSubmit, state, selectedOption, handleOptionClick, handleClose, handleDepositTypeChange, handleDepositAmountChange, handleDepositSubmit, handleBuySubmit, handleBuyTypeChange, handleBuyAmountChange}: any) => {
    return (
        <div className="OperationsDashboard__wrapper">
            <AccountStatus accountInfo={accountInfo} />
            <AccountOptions selectedOption={selectedOption} handleOptionClick={handleOptionClick} handleClose={handleClose} handleWithdrawTypeChange={handleWithdrawTypeChange} handleWithdrawalAmountChange={handleWithdrawalAmountChange} handleWithdrawalSubmit={handleWithdrawalSubmit} state={state} handleDepositTypeChange={handleDepositTypeChange} handleDepositAmountChange={handleDepositAmountChange} handleDepositSubmit={handleDepositSubmit} handleBuySubmit={handleBuySubmit} handleBuyTypeChange={handleBuyTypeChange} handleBuyAmountChange={handleBuyAmountChange} />
        </div>
    )
}

export default OperationsDashboard