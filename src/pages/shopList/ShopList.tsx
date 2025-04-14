import { IItems } from '../../entities/base/types';
import List from '../../widgets/List/List';
import styles from './styles.module.css'

interface props {
    arr: IItems[]
}


const ShopList: React.FC<props> = ({ arr }) => {
    return (
        <ul className={styles.list}>
            {
                arr.map((item, index) => {
                    return <li key={index}>
                        <h3 className={styles.title}>{item.name}</h3>
                        <List list={item.array} />
                    </li>
                })
            }
        </ul>
    );
}
export default ShopList;