import { IItem } from '../../entities/base/types';
import ItemCard from '../itemCard/ItemCard';
import styles from './styles.module.css'

interface props {
    list: IItem[]
}

const List: React.FC<props> = ({ list }) => {
    return (
        <ul className={styles.list}>
            {list.map((item, index) => {
                return <ItemCard key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    priceWithoutDiscount={item.priceWithoutDiscount}
                    rate={item.rate} />
            })}
        </ul>

    );
}
export default List;