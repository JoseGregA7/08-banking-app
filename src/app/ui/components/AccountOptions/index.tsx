import './style.scss';
import SubOptions from '../AccountSubOptions';
const AccountOptions = ({ selectedOption, handleOptionClick, handleClose }: { selectedOption: string | null, handleOptionClick: (option: string) => void, handleClose: () => void }) => {

  return (
    <div className="Option__wrapper">
      <div className="Option__title">Opciones de la Cuenta</div>
      <div className="Option__container">
        <button className="Option__button" onClick={() => handleOptionClick('depositos')}>Depósitos</button>
        <button className="Option__button" onClick={() => handleOptionClick('retiros')}>Retiros</button>
        <button className="Option__button" onClick={() => handleOptionClick('compras')}>Compras</button>
      </div>
      {
        selectedOption &&
        <div className='Option__close'>
          <div>
            <button onClick={handleClose}>x</button>
          </div>
        </div>
      }
      {selectedOption && <SubOptions option={selectedOption} />}
    </div>
  );
};

export default AccountOptions;
