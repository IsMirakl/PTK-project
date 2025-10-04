import { Link, NavLink, useLocation } from "react-router-dom";
import { useCallback } from "react";

import styles from "../styles/Header.module.css";
import Logotype from '../assets/logo/Logotype.svg';
import { useAuth } from "../hooks/useAuth";

  const ROUTES = {
    HOME: '/',
    AUTH: '/auth',
    COURSES: '/courses',
    MY_COURSES: '/my-courses',
    EVENTS: '/events',
    PROJECTS: '/projects',
    PROFILE: '/profile'
  } as const;

  interface NavItem {
    to: string;
    label: string;
  }

  const NAV_ITEMS: NavItem[] = [
    {to: ROUTES.COURSES, label: 'Все курсы'},
    {to: ROUTES.MY_COURSES, label: 'Мои курсы'},
    {to: ROUTES.EVENTS, label: 'Мероприятия'},
    {to: ROUTES.PROJECTS, label: 'Проекты'}
  ] 

  const Header: React.FC = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/auth';

    const { user, logout } = useAuth();
    const isAuthenticated = !!user;

  const handleLogout =  useCallback(async () => {
    await logout();
    window.location.href = '/home';
  }, [logout]);
 return (
  <>
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}> 
          <NavLink to='/home'>
            <img src={Logotype} alt="Логотип"/>
          </NavLink>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} className={({isActive}) => isActive ? 
                `${styles.navLink} ${styles.active}` : styles.navLink}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.authSection}>
          {isAuthenticated ? (
            <div className={styles.profileSection}>
              <Link to={ROUTES.PROFILE}>
                Профиль
              </Link>
              <button onClick={handleLogout}>
                Выйти
              </button>
            </div>
          ) : (
            !isAuthPage && (
            <Link to='/auth' className={styles.loginButton}>Войти</Link>
            )
          )}
        </div>
      </div>
    </header>
  </>
  );
}

export default Header;