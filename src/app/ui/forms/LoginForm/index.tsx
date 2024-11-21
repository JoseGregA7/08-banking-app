import './style.scss';

const LoginForm = ({ handleSubmit, loading, error, formData, handleChange }: { handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, loading: boolean, error: string | null, formData: { email: string, password: string }, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div className='register__container'>
                    <div className='register__container__title'>Iniciar Sesión</div>
                    <form className='register__container__form' onSubmit={handleSubmit}>
                        <div className='register__container__form__input'>
                            <label className='register__container__form__input__label'>Correo Electrónico</label>
                            <input className='register__container__form__input__input'
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='register__container__form__input'>
                            <label className='register__container__form__input__label'>Contraseña</label>
                            <input className='register__container__form__input__input'
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && <div className='register__container__error'>{error}</div>}
                        <div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Autenticando...' : 'Iniciar Sesión'}
                            </button>
                        </div>
                    </form>
                </div>
    )
}

export default LoginForm