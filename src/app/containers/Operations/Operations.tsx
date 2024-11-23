import { useNavigate } from 'react-router-dom';
import { LayoutMain } from '@ui/layouts/LayoutMain';
import BasicWrapper from '@ui/components/BasicWrapper';
import useAccount from '../../core/hooks/useAccount';
import OperationsDashboard from '@ui/components/OperationsDashboard';
import { useGoBack } from '../../core/hooks/useGoBack';

const Operations = () => {
    const { accountInfo, loading, error } = useAccount();
    const { handleGoBack } = useGoBack();
    const navigate = useNavigate();

    return (
        <LayoutMain>
            <BasicWrapper handleGoBack={handleGoBack}>
                <OperationsDashboard navigate={navigate} accountInfo={accountInfo} loading={loading} error={error} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Operations;
