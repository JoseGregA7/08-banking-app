import './style.scss';

const RegisterForm = ({ handleSubmit, loading, error, formData, handleChange } : { handleSubmit: any, loading: boolean, error: string | null, formData: any, handleChange: any }) => {
    return (
        <div className='register__container'>
        <div className='register__container__title'>Registro de Usuario</div>
        <form className='register__container__form' onSubmit={handleSubmit}>
            <div className='register__container__form__input'>
                <label className='register__container__form__input__label'>Primer Nombre</label>
                <input className='register__container__form__input__input'
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='register__container__form__input'>
                <label className='register__container__form__input__label'>Apellido</label>
                <input className='register__container__form__input__input'
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='register__container__form__input'>
                <label className='register__container__form__input__label'>Correo Electrónico</label>
                <input className='register__container__form__input__input'
                    type="email"
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar'}
                </button>
            </div>
        </form>
    </div>
    )
}

export default RegisterForm;