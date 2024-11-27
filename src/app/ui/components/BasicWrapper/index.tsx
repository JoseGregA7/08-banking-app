import { ReactNode } from 'react';
import './style.scss';
import { TermsAndConditions } from '../TermsAndConditions';
import AvatarLogout from '../AvatarComponent';
import GoBackComponent from '../GoBackComponent';
import WelcomeTitle from '../WelcomeTitle';
import WelcomeSubTitle from '../WelcomeSubTitle';

interface Props {
  children: ReactNode | ReactNode[];
  handleGoBack: () => void;
  handleEndSession: () => void;
}

const BasicWrapper = ({ children, handleGoBack, handleEndSession }: Props) => {
  return (
    <div className='layout_main_wrapper' data-testid="basic-wrapper">
      <div className='layout_main'>
        <div className='layout_main__content'>
          <header className='layout_main__header' role="banner">
            <div className='back-button-wrapper'>
                <GoBackComponent handleGoBack={handleGoBack} />
              
              <AvatarLogout handleEndSession={handleEndSession} />
            </div>
            <div className='layout_main__logo'>
              <img src="bank.webp" alt="Logo de GregBank, banco en línea" data-testid="bank-logo" />
            </div>
            <WelcomeTitle />
            <WelcomeSubTitle />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <TermsAndConditions />
          </footer>
        </div>
      </div>
    </div>
  )
};

export default BasicWrapper;
