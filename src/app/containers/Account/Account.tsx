import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import useAccount from '../../core/hooks/useAccount';
import AccountMain from '@ui/components/AccountMain';

const Account = () => {
    const { accountInfo, loading, error } = useAccount();
    const navigate = useNavigate();

    return (
        <LayoutMain>
            <BasicWrapper>
                <AccountMain navigate={navigate} accountInfo={accountInfo} loading={loading} error={error} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Account;
