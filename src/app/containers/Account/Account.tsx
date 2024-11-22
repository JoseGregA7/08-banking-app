import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import AccountContent from '@ui/components/AccountContent';
import AccountError from '@ui/components/AccountError';
import AccountOptions from '@ui/components/AccountOptions';
import useAccount from '../../core/hooks/useAccount';

const Account = () => {
    const { accountInfo, loading, error } = useAccount();
    const navigate = useNavigate();
    const renderAccountInfo = () => {
        if (loading) return <p>Cargando...</p>;
        if (!accountInfo) return <></>;
        return <AccountContent navigate={navigate} account={accountInfo} />;
    };

    return (
        <LayoutMain>
            <BasicWrapper>
                <AccountError error={error} renderAccountInfo={renderAccountInfo} navigate={navigate} />
                {accountInfo && <AccountOptions />}
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Account;
