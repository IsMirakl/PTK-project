import { useCallback, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../Components/Header.tsx';
import Footer from '../Components/Footer.tsx';

import Vk_icon from '../assets/icons/Vk_icon.svg';
import style from '../styles/AuthPage.module.css';
import { useAuth } from '../hooks/useAuth.ts';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();
  const { vkAuth } = useAuth();

  const handleEmailSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (email && !showPasswordInput) {
      setShowPasswordInput(true);
    }
  }, [email, showPasswordInput]);

  const handleLoginSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (email && password) {
      const success = await login({ email, password });
      if (success) {
        navigate('/profile');
      }
    }
  }, [email, password, login, navigate]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!showPasswordInput) {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }, [showPasswordInput]);

  const handleVKAuth = useCallback(async () => {
    const code = 'ваш_code_от_vk';
    const redirectUri = 'ваш_redirect_uri';
    const success = await vkAuth({ code, redirectUri });
    if (success) {
      navigate('/profile');
    }
  }, [vkAuth, navigate]);

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
              <input 
                type="email" 
                placeholder="Адрес электронной почты" 
                className={style.emailAuth} 
                value={email} 
                onChange={handleInputChange}
                required
              />
            ) : (
              <div style={{ position: 'relative' }}>
                <input 
                  type="password" 
                  placeholder="Пароль" 
                  className={style.emailAuth} 
                  value={password}
                  onChange={handleInputChange}
                  required
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
                    color: '#666'
                  }}
                >
                  ←
                </button>
              </div>
            )}
          </div>

          {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}

          <div className={style.buttonContainer}>
            <button 
              type='submit' 
              className={style.buttonAuth} 
              disabled={isLoading}
            >
              {isLoading ? 'Загрузка...' : showPasswordInput ? 'Войти' : 'Продолжить'}
            </button>
            
            {!showPasswordInput && (
              <>
                <p className={style.registerText}>
                  У вас нет учетной записи?
                </p>
                <Link to='/register' className={style.registerLink}>Зарегистрироваться</Link>
              </>
            )}
          </div>

          {!showPasswordInput && (
            <>
              <div className={style.divider}>
                <hr className={style.dividerLine} />
                <span className={style.dividerText}>ИЛИ</span>
                <hr className={style.dividerLine} />
              </div>

              <div className={style.socialAuth} onClick={handleVKAuth}>
                <img src={Vk_icon} alt="VK Icon" className={style.socialIcon}/>
                <p className={style.socialLink}>Продолжить с VK | ID</p>
              </div>
            </>
          )}
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default AuthPage;