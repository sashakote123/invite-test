import styles from './styles.module.css'

import img from './../../img/Image.png'
import ItemInShoppingCard from '../../widgets/itemInShoppingCard/ItemInShoppingCard';
import TotalPrice from '../../widgets/totalPrice/TotalPrice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/providers/store';

// let shoppingCart = [{
//     image: img,
//     name: 'Apple BYZ S852I',
//     price: 2927,
//     how: 1,
// },
// {
//     image: img,
//     name: 'Apple BYZ S852I',
//     price: 2927,
//     how: 3,
// },
// {
//     image: img,
//     name: 'Apple BYZ S852I',
//     price: 2927,
//     how: 4,
// },
// ]


const ShoppingCart = () => {

    const shoppingCart = useSelector((store: RootState) => store.shoppinCartSlice)

    return (
        <section className={styles.cart}>
            <div className={styles.left}>
                <div className={styles.title}>Корзина</div>
                <ul className={styles.list}>
                    {shoppingCart.map((item: any) => {
                        return <ItemInShoppingCard
                            key={item.name}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            how={item.how} />
                    })}
                </ul>
            </div>
            <div className={styles.right}>
                <TotalPrice />
            </div>

        </section>
    );
}
export default ShoppingCart;