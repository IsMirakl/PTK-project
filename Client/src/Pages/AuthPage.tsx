import Header from '../Components/Header.tsx';
import { useState } from 'react';

import Vk_icon from '../assets/icons/Vk_icon.svg';
import style from './AuthPage.module.css';
import { Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');



   // Здесь будет логика авторизации
    console.log('Email:', email, setEmail);
    

  //   const handleVkAuth = (): void => {
  //   // Логика авторизации через VK
  //   console.log('VK auth clicked');
  // };

  return (
    <>
    <Header />
    <div className={style.container}>
      <form action="#" className={style.formAuth}>
        <legend className={style.legendAuth}>С возвращением</legend>
          <input type="email" placeholder="Адрес электронной почты" className={style.emailAuth}/>
          <div className={style.buttonContainer}>
            <button type='submit' className={style.buttonAuth}>Продолжить</button>
            <p className={style.registerText}>
            У вас нет учетной записи?
            </p>
            <Link to='' className={style.registerLink}>Зарегистрироваться</Link>
          </div>
          <div className={style.divider}>
          <hr className={style.dividerLine} />
          <span className={style.dividerText}>ИЛИ</span>
          <hr className={style.dividerLine} />
        </div>
          <div className={style.socialAuth}>
            <img src={Vk_icon} alt="#" className={style.socialIcon}/>
            <p className={style.socialLink}>Продолжить с VK | ID</p>
            </div>
      </form>
          </div>
    </>
  );
}

export default AuthPage;