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
    <div className='layout_main_wrapper'>
      <div className='layout_main'>
        <div className='layout_main__content'>
          <div className='layout_main__header'>
            <div className='back-button-wrapper'>
              <div className='back-button-container'>
                <button className='back-button' onClick={handleGoBack}>
                   ↩
                </button>
              </div>
              <AvatarLogout handleEndSession={handleEndSession} />
            </div>
            <div className='layout_main__logo'>
              <img src="bank.webp" alt="Logo del Banco" />
            </div>
            <h1 className='welcomeText'>Bienvenido a GregBank</h1>
            <p className='sub-text'>¡Tu banco en línea, fácil y seguro!</p>
          </div>
          {children}
          <TermsAndConditions />
        </div>
      </div>
    </div>
  )
};

export default BasicWrapper;