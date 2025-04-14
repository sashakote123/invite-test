import { useSelector } from 'react-redux';
import styles from './styles.module.css'
import { RootState } from '../../app/providers/store';

const TotalPrice = () => {

    const price = useSelector((store: RootState) => store.shoppinCartSlice).reduce((sum, item) => sum + (item.price * item.how), 0);


    return (
        <div className={styles.total}>
            <div className={styles.totalPrice}>
                <div className={styles.title}>Итого</div>
                <div className={styles.title}>₽ {price}</div>
            </div>
            <button className={styles.btn}>Перейти к оформлению</button>
        </div>
    );
}
export default TotalPrice;