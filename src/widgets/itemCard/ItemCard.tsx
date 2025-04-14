import styles from './styles.module.css'
import img1 from './../../img/Image.png'
import img2 from './../../img/star.svg'
import { IItem } from '../../entities/base/types';
import { useDispatch } from 'react-redux';
import { addToShoppingCart, deleteIntoShoppingCart } from '../../app/providers/store/shoppingCartSlice';
import { useState } from 'react';




const ItemCard: React.FC<IItem> = ({ image, name, price, priceWithoutDiscount, rate }) => {

    const storedData = localStorage.getItem('shoppingCard');
    let parsedData = []

    if (storedData !== null) {
        parsedData = JSON.parse(storedData);
    }


    const [inCart, setIsInCart] = useState(parsedData.find((item: any) => item.name === name) ? true : false)
    const dispatch = useDispatch()

    const handleAdd = () => {
        if (!inCart) {
            dispatch(addToShoppingCart({ image: image, name: name, price: price, how: 1 }))
            setIsInCart(prev => !prev)
        }

        if (inCart) {
            dispatch(deleteIntoShoppingCart(name))
            setIsInCart(prev => !prev)
        }

    }



    return (
        <li className={styles.item}>
            <img src={image} alt="preview" />
            <div className={styles.itemInfo}>
                <div className={styles.name}>{name}</div>
                <div className={styles.prices}>
                    <div className={styles.price}>{price} ₽</div>
                    {priceWithoutDiscount ? <div className={styles.priceWithDiscount}>{priceWithoutDiscount} ₽</div> : null}
                </div>
            </div>
            <div className={styles.itemSubInfo}>
                <div className={styles.rate}>
                    <img src={img2} alt='star' />
                    <div className={styles.rateInfo}>{rate}</div>
                </div>
                <button onClick={handleAdd} className={styles.buyBtn}>{!inCart ? <>Купить</> : <>В корзине</>}</button>
            </div>
        </li>
    );
}
export default ItemCard;