import './style.scss';

const AccountOptions = () => {
    return (
        <div className='Option__wrapper'>
            <div className='Option__title'>Opciones de la Cuenta</div>
            <div className='Option__container'>
                <button className='Option__button'>Transferir</button>
                <button className='Option__button'>Retirar</button>
                <button className='Option__button'>Imprimir</button>
                <button className='Option__button'>Exportar</button>
            </div>
        </div>
    )
}

export default AccountOptions;