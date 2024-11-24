import { LayoutMain } from '@ui/layouts/LayoutMain';
import { useNavigate } from 'react-router-dom';
import BasicWrapper from '@ui/components/BasicWrapper';
import WelcomeComponent from '@ui/components/WelcomeComponent';
import { useGoBack } from '../../core/hooks/useGoBack';
import { useGoHome } from '../../core/hooks/useGoHome';

const Home = () => {
    const navigate = useNavigate();
    const { handleGoBack } = useGoBack();
    const handleLoginClick = () => navigate('/login');
    const handleSignUpClick = () => navigate('/signup');
    const { handleEndSession } = useGoHome();
    return (
        <LayoutMain>
            <BasicWrapper handleGoBack={handleGoBack} handleEndSession={handleEndSession}>
                <WelcomeComponent handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Home;
