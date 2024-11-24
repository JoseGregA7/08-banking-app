import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import useAccount from '../../core/hooks/useAccount';
import OperationsDashboard from '@ui/components/OperationsDashboard';
import { useGoBack } from '../../core/hooks/useGoBack';
import { useGoHome } from '../../core/hooks/useGoHome';
import { useAppContext } from '../../core/state/AppContext';
import useWithdrawal from '../../core/hooks/useWithdrawal';
import { SET_BUY_AMOUNT, SET_BUY_TYPE, SET_DEPOSIT_AMOUNT, SET_DEPOSIT_TYPE, SET_WITHDRAWAL_AMOUNT, SET_WITHDRAWAL_TYPE } from '../../core/state/status/actions';
import { useState } from 'react';
import useBuy from '../../core/hooks/useBuy';
import useDeposit from '../../core/hooks/useDeposit';

const Operations = () => {
    const { accountInfo, loading, error } = useAccount();
    const { handleGoBack } = useGoBack();
    const { handleEndSession } = useGoHome();
    const navigate = useNavigate();
    const { dispatch, state } = useAppContext();
    const { handleWithdrawal } = useWithdrawal();
    const { handleDeposit } = useDeposit();
    const { handleBuy } = useBuy();
    const handleWithdrawTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: SET_WITHDRAWAL_TYPE, payload: e.target.value });
    };
    const handleWithdrawalAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: SET_WITHDRAWAL_AMOUNT, payload: parseFloat(e.target.value) });
    };
    const handleWithdrawalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleWithdrawal();
    };
    const handleDepositSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleDeposit();
    };
    const handleDepositTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: SET_DEPOSIT_TYPE, payload: e.target.value });
    };
    const handleDepositAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: SET_DEPOSIT_AMOUNT, payload: parseFloat(e.target.value) });
    };
    const handleBuySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleBuy();
    };
    const handleBuyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: SET_BUY_TYPE, payload: e.target.value });
    };
    const handleBuyAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: SET_BUY_AMOUNT, payload: parseFloat(e.target.value) });
    };
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };
    const handleClose = () => {
        setSelectedOption(null);
    }

    return (
        <LayoutMain>
            <BasicWrapper handleGoBack={handleGoBack} handleEndSession={handleEndSession}>
                <OperationsDashboard navigate={navigate} accountInfo={accountInfo} loading={loading} error={error} handleWithdrawTypeChange={handleWithdrawTypeChange} handleWithdrawalAmountChange={handleWithdrawalAmountChange} handleWithdrawalSubmit={handleWithdrawalSubmit} state={state} selectedOption={selectedOption} handleOptionClick={handleOptionClick} handleClose={handleClose} handleDepositTypeChange={handleDepositTypeChange} handleDepositAmountChange={handleDepositAmountChange} handleDepositSubmit={handleDepositSubmit} handleBuyTypeChange={handleBuyTypeChange} handleBuyAmountChange={handleBuyAmountChange} handleBuySubmit={handleBuySubmit} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Operations;
