import './style.scss';

const RegisterForm = ({
  handleSubmit,
  loading,
  error,
  formData,
  handleChange,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: string | null;
  formData: { firstname: string; lastname: string; email: string; password: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="register__container" data-testid="register-container">
      <div className="register__container__title" id="register-form-title">
        Registro de Usuario
      </div>
      <form
        className="register__container__form"
        onSubmit={handleSubmit}
        aria-labelledby="register-form-title"
        data-testid="register-form"
      >
        <div className="register__container__form__input">
          <label
            htmlFor="firstname"
            className="register__container__form__input__label"
            data-testid="firstname-label"
          >
            Primer Nombre
          </label>
          <input
            className="register__container__form__input__input"
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            aria-required="true"
            data-testid="firstname-input"
          />
        </div>

        <div className="register__container__form__input">
          <label
            htmlFor="lastname"
            className="register__container__form__input__label"
            data-testid="lastname-label"
          >
            Apellido
          </label>
          <input
            className="register__container__form__input__input"
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            aria-required="true"
            data-testid="lastname-input"
          />
        </div>

        <div className="register__container__form__input">
          <label
            htmlFor="email"
            className="register__container__form__input__label"
            data-testid="email-label"
          >
            Correo Electrónico
          </label>
          <input
            className="register__container__form__input__input"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            data-testid="email-input"
          />
        </div>

        <div className="register__container__form__input">
          <label
            htmlFor="password"
            className="register__container__form__input__label"
            data-testid="password-label"
          >
            Contraseña
          </label>
          <input
            className="register__container__form__input__input"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-required="true"
            data-testid="password-input"
          />
        </div>

        {error && (
          <div
            className="register__container__error"
            role="alert"
            style={{ color: 'red' }}
            data-testid="error-message"
          >
            {error}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={loading}
            aria-live="polite"
            aria-busy={loading ? 'true' : 'false'}
            data-testid="submit-button"
          >
            {loading ? 'Registrando...' : 'Registrar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
