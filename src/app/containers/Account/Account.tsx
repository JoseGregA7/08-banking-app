import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import useAccount from '../../core/hooks/useAccount';
import AccountMain from '@ui/components/AccountMain';
import { useGoBack } from '../../core/hooks/useGoBack';
import { useGoHome } from '../../core/hooks/useGoHome';

const Account = () => {
    const { accountInfo, loading, error } = useAccount();
    const { handleGoBack } = useGoBack();
    const { handleEndSession } = useGoHome();
    const navigate = useNavigate();
    console.log('accountInfo', accountInfo);

    return (
        <LayoutMain>
            <BasicWrapper handleGoBack={handleGoBack} handleEndSession={handleEndSession}>
                <AccountMain navigate={navigate} accountInfo={accountInfo} loading={loading} error={error} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Account;
