import { useCallback, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer.tsx';
import Header from '../Components/Header.tsx';

import { AuthButton } from '../Components/forms/AuthButton.tsx';
import { AuthInput } from '../Components/forms/AuthForm.tsx';
import { useAuth } from '../hooks/useAuth.ts';
import style from '../styles/pages/AuthPage.module.css';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleEmailSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (email && !showPasswordInput) {
        setShowPasswordInput(true);
      }
    },
    [email, showPasswordInput]
  );

  const handleLoginSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (email && password) {
        const success = await login({ email, password });
        if (success) {
          navigate('/profile');
        }
      }
    },
    [email, password, login, navigate]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!showPasswordInput) {
        setEmail(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    },
    [showPasswordInput]
  );

  const handleBackToEmail = useCallback(() => {
    setShowPasswordInput(false);
    setPassword('');
  }, []);

  return (
    <>
      <Header />
      <div className={style.container}>
        <form
          onSubmit={showPasswordInput ? handleLoginSubmit : handleEmailSubmit}
          className={style.formAuth}
        >
          <legend className={style.legendAuth}>С возвращением</legend>

          <div style={{ position: 'relative' }}>
            {!showPasswordInput ? (
              <AuthInput
                type="email"
                placeholder="Адрес электронной почты"
                value={email}
                className={style.emailAuth}
                onChange={handleInputChange}
                required
              />
            ) : (
              <div style={{ position: 'relative' }}>
                <AuthInput
                  type="password"
                  placeholder="Пароль"
                  value="password"
                  className={style.emailAuth}
                  onChange={handleInputChange}
                />

                <button
                  type="button"
                  onClick={handleBackToEmail}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: '#666',
                  }}
                >
                  ←
                </button>
              </div>
            )}
          </div>

          {error && (
            <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
          )}

          <div className={style.buttonContainer}>
            <AuthButton
              type="submit"
              className={style.buttonAuth}
              disabled={isLoading}
            >
              {showPasswordInput ? 'Войти' : 'Продолжить'}
            </AuthButton>

            {!showPasswordInput && (
              <>
                <p className={style.registerText}>У вас нет учетной записи?</p>
                <Link to="/register" className={style.registerLink}>
                  Зарегистрироваться
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
