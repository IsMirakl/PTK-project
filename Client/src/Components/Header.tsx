import { Link, NavLink } from "react-router-dom";

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

    const { user, logout } = useAuth();
    const isAuthenticated = !!user;

    console.log('User:', user);
    console.log('Is authenticated:', isAuthenticated);

  const handleLogout = async () => {
    await logout();
    window.location.href = '/home';
  };
    return (
      <>
        <header className={styles.header}>
          <div className={styles.container}>
              <div className={styles.headerLogo}> 
                <NavLink to='/home'>
                  <img src={Logotype} alt="Логотип"/>
                </NavLink>
                {/* <NavLink to='' className={styles.nameProject}>Птк Знания
                </NavLink> */}
              </div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              </ul>
            </nav>
            {isAuthenticated ? (
            <div>
              <Link to={ROUTES.PROFILE}>
                Профиль
              </Link>
              <button onClick={handleLogout}>
                Выйти
              </button>
            </div>
          ) : (
            <button className={styles.loginButton}>
              <Link to='/auth'>Войти</Link>
            </button>
          )}
          </div>
        </header>
      </>
    );
  }

  export default Header;