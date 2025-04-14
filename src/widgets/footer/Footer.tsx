import styles from './styles.module.css'
import img1 from './../../img/logo.svg'
import img2 from './../../img/lang.svg'
import img3 from './../../img/VK.svg'
import img4 from './../../img/Telegram.svg'
import img5 from './../../img/Whatsapp.svg'
import { Link } from 'react-router'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to='/' className={styles.footerRowLogo}>
                <img src={img1} alt="logo" />
            </Link>
            <div className={styles.footerRowLinks}>
                <Link to='/notFound' className={styles.link}>Избранное</Link>
                <Link to='/shoppingCart' className={styles.link}>Корзина</Link>
                <div className={styles.link}>Контакты</div>
            </div>
            <div className={styles.footerRowLangs}>
                <Link to='/notFound' className={styles.service}>Условия сервиса</Link>
                <div className={styles.languages}>
                    <img src={img2} alt="langs" />
                    <div className={styles.lang}>Рус</div>
                    <div className={styles.lang}>Eng</div>
                </div>
            </div>
            <div className={styles.footerRowSocials}>
                <a href="https://vk.com/neoflex_ru">
                    <img src={img3} alt="vk" />
                </a>
                <a href="https://t.me/neoflexcareers">
                    <img src={img4} alt="tg" />
                </a>

                <img src={img5} alt="ws" />
            </div>
        </footer>
    );
}
export default Footer;