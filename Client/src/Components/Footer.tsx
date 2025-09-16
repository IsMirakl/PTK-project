import type React from "react"

import styles from "../styles/Footer.module.css";


const Footer: React.FC = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerBlock}>
                <button className={styles.footerButton}><span>Птк новгу</span></button>
                <p>Портал дополнительного образования
Политехнического колледжа НовГУ</p>
            </div>
            <div className={styles.footerBlock2}>
                <h2>Контакты</h2>
                <br />
                <div className={styles.footerBlockBody}>
                    <p>Email:</p>
                    <a href="mailto:test@test.ru">test@test.ru</a>
                </div>
                <br />
                <div className={styles.footerBlockBody}>
                    <p>Телефон: </p>
                    <a href="tel:+78162974558">+7000000000</a>
                </div>
                <br />
                <div className={styles.footerBlockBody}>
                     <p>Адрес:</p>
                     <a href="https://yandex.ru/maps/-/CCUy64RlHB">г. Великий Новгород, ул. Большая <br />Санкт-Петербургская, 41</a>
                </div>
            </div>
            <div className={styles.footerBlock3}>
                <h2>Дополнительно</h2>
                <a href="">Политика конфидициальности</a>
                <a href="">О проекте</a>
                <a href="">Частые вопросы</a>
            </div>
            </div>
            <hr />
            <div className={styles.author}>
                <p>© 2025 ПТК НовГУ. Все права защищены.</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;