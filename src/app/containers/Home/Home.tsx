import { LayoutMain } from '@ui/layouts/LayoutMain';
import { useNavigate } from 'react-router-dom';
import BasicWrapper from '@ui/components/BasicWrapper';
import WelcomeComponent from '@ui/components/WelcomeComponent';

const Home = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => navigate('/login');
    const handleSignUpClick = () => navigate('/signup');
    const clientId = localStorage.getItem('clientId');
    console.log('test', clientId);
    return (
        <LayoutMain>
            <BasicWrapper>
                <WelcomeComponent handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick} />
            </BasicWrapper>
        </LayoutMain>
    );
};

export default Home;
