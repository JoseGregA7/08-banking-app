export const SET_ACCOUNT_INFO = 'SET_ACCOUNT_INFO';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_WITHDRAWAL_AMOUNT = 'SET_WITHDRAWAL_AMOUNT';
export const SET_WITHDRAWAL_TYPE = 'SET_WITHDRAWAL_TYPE';
export const SET_BUY_TYPE = 'SET_BUY_TYPE';
export const SET_BUY_AMOUNT = 'SET_BUY_AMOUNT';
export const SET_DEPOSIT_TYPE = 'SET_DEPOSIT_TYPE';
export const SET_DEPOSIT_AMOUNT = 'SET_DEPOSIT_AMOUNT';

export const setAccountInfo = (accountData: any) => ({
    type: SET_ACCOUNT_INFO,
    payload: accountData,
});

export const setError = (error: string) => ({
    type: SET_ERROR,
    payload: error,
});

export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    payload: loading,
});

export const setWithdrawalAmount = (amount: number) => ({
    type: SET_WITHDRAWAL_AMOUNT,
    payload: amount,
});

export const setWithdrawalType = (type: string) => ({
    type: SET_WITHDRAWAL_TYPE,
    payload: type,
});

export const setBuyType = (type: string) => ({
    type: SET_BUY_TYPE,
    payload: type,
});

export const setBuyAmount = (amount: number) => ({
    type: SET_BUY_AMOUNT,
    payload: amount,
});

export const setDepositType = (type: string) => ({
    type: SET_DEPOSIT_TYPE,
    payload: type,
});

export const setDepositAmount = (amount: number) => ({
    type: SET_DEPOSIT_AMOUNT,
    payload: amount,
});
