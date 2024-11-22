export interface FirstLoginResponseData {
    dinHeader: {
        device: string;
        language: string;
        uuid: string;
        ip: string;
        transactionTime: string;
        symmetricalKey: string;
        initializationVector: string;
    };
    dinBody: {
        token: string;
        id: string;
    };
    dinError: {
        type: string;
        date: string;
        origin: string;
        code: string;
        codeErrorProvider: string;
        message: string;
        detail: string;
    };
}

export interface IFirstLoginData {
    email: string;
    password: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface ISignUpData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface IResponseData {
    dinHeader: {
        device: string;
        language: string;
        uuid: string;
        ip: string;
        transactionTime: string;
        symmetricalKey: string;
        initializationVector: string;
    };
    dinBody: {
        token: string | null;
        id: string | null;
    };
    dinError: {
        type: string;
        date: string;
        origin: string;
        code: string;
        codeErrorProvider: string;
        message: string;
        detail: string;
    };
}

export interface ISignUpRequestData {
    dinHeader: {
        device: string;
        language: string;
        uuid: string;
        ip: string;
        transactionTime: string;
        symmetricalKey: string;
        initializationVector: string;
    };
    dinBody: ISignUpData & { role: string };
}