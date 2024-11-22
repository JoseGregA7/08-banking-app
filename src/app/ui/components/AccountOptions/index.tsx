import './style.scss';

const AccountOptions = () => {
    return (
        <div className='Option__wrapper'>
            <div className='Option__title'>Operaciones</div>
            <div className='Option__container'>
                <button className='Option__button'>Depositos</button>
                <button className='Option__button'>Retiros</button>
                <button className='Option__button'>Compras</button>
            </div>
        </div>
    )
}

export default AccountOptions;