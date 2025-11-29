import { Link, NavLink, useLocation } from "react-router-dom";
import { useCallback, useState } from "react";

import { formatShortName } from "../utils/formatName";

import styles from "../styles/components/Header.module.css";
import Logotype from '../assets/logo/Logotype.svg';
import Profile from "../assets/icons/profile.svg";
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    
    
    const { user, logout } = useAuth();
    const isAuthenticated = !!user;
    const displayName = user ? formatShortName(user.fullName) : '';

    const handleLogout = useCallback(async () => {
        await logout();
        setIsMobileMenuOpen(false);
        window.location.href = '/home';
    }, [logout]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavLinkClick = () => {
        closeMobileMenu();
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerLogo}> 
                        <NavLink to='/home' onClick={closeMobileMenu}>
                            <img src={Logotype} alt="Логотип"/>
                        </NavLink>
                    </div>
                    
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {NAV_ITEMS.map((item) => (
                                <li key={item.label}>
                                    <NavLink 
                                        to={item.to} 
                                        className={({isActive}) => isActive ? 
                                            `${styles.navLink} ${styles.active}` : styles.navLink}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    <div className={styles.authSection}>
                                <div className={styles.profileSection}>
                                <Link to={ROUTES.PROFILE} className={styles.profileLink}>
                                    <div className={styles.userInfo}>
                                            <img 
                                                src={user?.avatarUrl || Logotype} 
                                                className={styles.userAvatar}
                                            />
                                    </div>
                                    <div>
                                        <p className={styles.userName}>
                                            {displayName || "Иванов И.И"}
                                        </p>
                                        <p className={styles.handleName}>
                                            {user?.handle || "test"}
                                        </p>
                                    </div>
                                    <img src={Profile} alt="" />
                                </Link>
                            </div>

                        {/* {isAuthenticated ? (
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
                        )} */}
                    </div>


                    <button 
                        className={`${styles.burgerButton} ${isMobileMenuOpen ? styles.active : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Открыть меню"
                    >
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </button>
                </div>


                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <ul className={styles.mobileNavList}>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label} className={styles.mobileNavItem}>
                                <NavLink 
                                    to={item.to} 
                                    className={({isActive}) => isActive ? 
                                        `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink}
                                    onClick={handleNavLinkClick}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    
                    <div className={styles.mobileAuthSection}>
                        {isAuthenticated ? (
                            <div className={styles.mobileProfileSection}>
                                <Link 
                                    to={ROUTES.PROFILE} 
                                    className={styles.mobileNavLink}
                                    onClick={handleNavLinkClick}
                                >
                                    Профиль
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className={styles.mobileNavLink}
                                    style={{background: 'none', border: 'none', textAlign: 'left'}}
                                >
                                    Выйти
                                </button>
                            </div>
                        ) : (
                            !isAuthPage && (
                                <Link 
                                    to='/auth' 
                                    className={styles.mobileLoginButton}
                                    onClick={handleNavLinkClick}
                                >
                                    Войти
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;