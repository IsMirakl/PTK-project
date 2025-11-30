import { useCallback, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { AuthButton } from '../Components/ui/forms/AuthButton';
import { AuthInput } from '../Components/ui/forms/AuthForm';
import style from '../styles/pages/RegisterPage.module.css';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    password: '',
  });

  const { register, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password
      ) {
        alert('Все поля обязательны для заполнения');
        return;
      }

      if (formData.password.length < 8) {
        alert('Пароль должен содержать минимум 6 символов');
        return;
      }

      if (!formData.email.includes('@')) {
        alert('Введите корректный email адрес');
        return;
      }

      const success = await register(formData);
      if (success) {
        navigate('/profile');
      }
    },
    [register, navigate, formData]
  );

  return (
    <>
      <Header />
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.formRegister}>
          <legend className={style.legendRegister}>Регистрация</legend>

          <AuthInput
            type="text"
            name="firstName"
            placeholder="Имя"
            className={style.inputRegister}
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <AuthInput
            type="text"
            name="lastName"
            placeholder="Фамилия"
            className={style.inputRegister}
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />

          <AuthInput
            type="text"
            name="middleName"
            placeholder="Отчество"
            className={style.inputRegister}
            value={formData.middleName}
            onChange={handleInputChange}
          />

          <AuthInput
            type="email"
            name="email"
            placeholder="Адрес электронной почты"
            className={style.inputRegister}
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <AuthInput
            type="password"
            name="password"
            placeholder="Пароль"
            className={style.inputRegister}
            value={formData.password}
            onChange={handleInputChange}
            required
            minLength={6}
          />

          {error && <div className={style.errorMessage}>{error}</div>}

          <div className={style.buttonContainer}>
            <AuthButton type="submit" isLoading={isLoading}>
              Зарегистрироваться
            </AuthButton>

            <p className={style.loginText}>Есть учетная запись?</p>
            <Link to="/auth" className={style.loginLink}>
              Войти
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
