import styles from './styles.module.css'
import img from './../../img/delete.svg'
import img2 from './../../img/Image.png'
import { IItem } from '../../entities/base/types';
import { useDispatch } from 'react-redux';
import { addCounter, deleteIntoShoppingCart, substractCounter } from '../../app/providers/store/shoppingCartSlice';



interface props extends Omit<IItem, 'rate'> {
    how: number
}



const ItemInShoppingCard: React.FC<props> = ({ image, name, price, how }) => {

    const dispatch = useDispatch()


    const handleAdd = () => {
        dispatch(addCounter(name))
    }

    const handleSub = () => {
        dispatch(substractCounter(name))
    }

    const handleDelete = () => {
        dispatch(deleteIntoShoppingCart(name))
    }


    return (
        <li className={styles.item}>
            <div className={styles.itemTop}>
                <img className={styles.photo} src={image} alt="img" />
                <div className={styles.info}>
                    <img onClick={handleDelete} className={styles.infoDelete} src={img} alt="delete" />
                    <div className={styles.infoName}>{name}</div>
                    <div className={styles.infoPrice}>{price} ₽</div>

                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.btns}>
                    <button onClick={handleSub} className={styles.btn}>-</button>
                    <div className={styles.num}>{how}</div>
                    <button onClick={handleAdd} className={styles.btn}>+</button>
                </div>
                <div className={styles.bottomPrice}>{price * how} ₽</div>
            </div>



        </li>
    );
}
export default ItemInShoppingCard;