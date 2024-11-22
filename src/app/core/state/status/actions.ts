// actions.ts
export const SET_ACCOUNT_INFO = 'SET_ACCOUNT_INFO';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

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
