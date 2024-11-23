import { LayoutMain } from '@ui/layouts/LayoutMain';
import { useNavigate } from 'react-router-dom';
import BasicWrapper from '@ui/components/BasicWrapper';
import WelcomeComponent from '@ui/components/WelcomeComponent';
import { useGoBack } from '../../core/hooks/useGoBack';

const Home = () => {
    const navigate = useNavigate();
    const { handleGoBack } = useGoBack();
    const handleLoginClick = () => navigate('/login');
    const handleSignUpClick = () => navigate('/signup');
    return (
        <LayoutMain>
            <BasicWrapper handleGoBack={handleGoBack}>
                <WelcomeComponent handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Home;
