import { ReactNode } from 'react';
import './style.scss';
import { TermsAndConditions } from '../TermsAndConditions';

interface Props {
  children: ReactNode | ReactNode[];
}

const BasicWrapper = ({ children }: Props) => {

  return (
    <div className='layout_main_wrapper'>
      <div className='layout_main'>
        <div className='layout_main__content'>
          <div className='layout_main__logo'>
            <img src="bank.webp" alt="Logo del Banco" />
          </div>
          <h1 className='welcomeText'>Bienvenido a GregBank</h1>
          <p className='sub-text'>¡Tu banco en línea, fácil y seguro!</p>
          {children}
          <TermsAndConditions/>
        </div>
      </div>
    </div>
  )
};

export default BasicWrapper;