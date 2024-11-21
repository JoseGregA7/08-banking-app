import './style.scss';

const WelcomeComponent = ({ handleLoginClick, handleSignUpClick }: { handleLoginClick: () => void, handleSignUpClick: () => void }) => {
    return (
        <div className='buttons-container'>
            <div>
                Ya tienes cuenta?
            </div>
            <button className='button' onClick={handleLoginClick}>Ingresar</button>
            <div>
                Unete ahora
            </div>
            <button className='button' onClick={handleSignUpClick}>Regístrate</button>

            <div>
                <a href="#" className='home__forgot-password'>
                    Olvide mi contraseña
                </a>
            </div>
        </div>
    )
}

export default WelcomeComponent;