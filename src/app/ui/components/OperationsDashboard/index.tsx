import { useState } from "react";
import AccountOptions from "../AccountOptions";
import AccountStatus from "../AccountStatus";
import { IAccountInfo } from "../../../core/interfaces/state";

interface AccountInfo {
    id: number | null;
    number: string | null;
    amount: number | null;
    customerId: number | null;
    createdAt: string | null;
}

const OperationsDashboard = ({ navigate, accountInfo, loading, error }: { navigate: any, accountInfo: IAccountInfo | null, loading: boolean, error: string | null }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };
    const handleClose = () => {
        setSelectedOption(null);
    }
    return (
        <div>
            <AccountStatus accountInfo={accountInfo} />           
            <AccountOptions selectedOption={selectedOption} handleOptionClick={handleOptionClick} handleClose={handleClose} />            
        </div>
    )
}

export default OperationsDashboard