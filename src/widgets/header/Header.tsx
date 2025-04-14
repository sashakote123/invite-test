import styles from './styles.module.css'

import img1 from './../../img/logo.svg'
import img2 from './../../img/like.svg'
import img3 from './../../img/cart.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/providers/store'
import { Link } from 'react-router'

const Header = () => {

    const cart = useSelector((store: RootState) => store.shoppinCartSlice)


    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src={img1} alt='logo' className={styles.headerLogo} />
            </Link>

            <div className={styles.headerLinks}>
                <Link to='/notFound' className={styles.link}>
                    <div className={styles.counter}>1</div>
                    <img src={img2} alt="likes" />
                </Link>
                <Link to='/shoppingCart' className={styles.link}>
                    <div className={styles.counter}>{cart.length}</div>
                    <img src={img3} alt="cart" />
                </Link>
            </div>
        </header>
    );
}
export default Header;