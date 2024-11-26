import { ReactNode } from 'react';
import './style.scss';
import { TermsAndConditions } from '../TermsAndConditions';
import AvatarLogout from '../AvatarComponent';

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
              <div className='back-button-container'>
                <button
                  className='back-button'
                  onClick={handleGoBack}
                  aria-label="Volver a la página anterior"
                  data-testid="back-button"
                >
                  ↩
                </button>
              </div>
              <AvatarLogout handleEndSession={handleEndSession} />
            </div>
            <div className='layout_main__logo'>
              <img src="bank.webp" alt="Logo de GregBank, banco en línea" data-testid="bank-logo" />
            </div>
            <h1 className='welcomeText'>Bienvenido a GregBank</h1>
            <p className='sub-text'>¡Tu banco en línea, fácil y seguro!</p>
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
