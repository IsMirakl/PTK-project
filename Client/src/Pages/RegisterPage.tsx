import { Link, useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import style from "../styles/RegisterPage.module.css";
import Vk_icon from '../assets/icons/Vk_icon.svg';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register, isLoading, error } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            alert('Все поля обязательны для заполнения');
            return;
        }
        
        if (formData.password.length < 6) {
            alert('Пароль должен содержать минимум 6 символов');
            return;
        }
        
        if (formData.password !== confirmPassword) {
            alert('Пароли не совпадают');
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
    };

    const handleVKAuth = () => {
        // Здесь будет логика VK авторизации
        console.log('VK auth');
    };

    return (
        <>
            <Header />
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.formRegister}>
                    <legend className={style.legendRegister}>Регистрация</legend>
                    
                    <input 
                        type="text" 
                        name="firstName"
                        placeholder="Имя" 
                        className={style.inputRegister}
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder="Фамилия" 
                        className={style.inputRegister}
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                    
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Адрес электронной почты" 
                        className={style.inputRegister}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Пароль" 
                        className={style.inputRegister}
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        minLength={6}
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Подтвердите пароль" 
                        className={style.inputRegister}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    
                    {error && (
                        <div className={style.errorMessage}>
                            {error}
                        </div>
                    )}
                    
                    <div className={style.buttonContainer}>
                        <button 
                            type='submit' 
                            className={style.buttonRegister}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                        </button>
                        
                        <p className={style.loginText}>
                            Есть учетная запись?
                        </p>
                        <Link to='/auth' className={style.loginLink}>Войти</Link>
                    </div>
                    
                    <div className={style.divider}>
                        <hr className={style.dividerLine} />
                        <span className={style.dividerText}>ИЛИ</span>
                        <hr className={style.dividerLine} />
                    </div>
                    
                    <div className={style.socialRegister} onClick={handleVKAuth}>
                        <img src={Vk_icon} alt="VK" className={style.socialIcon}/>
                        <p className={style.socialLink}>Продолжить с VK | ID</p>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default RegisterPage;