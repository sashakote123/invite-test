import { IItem, IItems } from "./types"
import img from './../../img/Image.png'
import img2 from './../../img/Image2.png'

const ItemsList: IItems[] = [
    {
        name: 'Наушники',
        array: [{
            image: img,
            name: 'Apple BYZ S852I',
            price: 2927,
            priceWithoutDiscount: 3527,
            rate: 4.7,
        },
        {
            image: img,
            name: 'Apple EarPods',
            price: 2327,
            rate: 4.7,
        },
        {
            image: img,
            name: 'Apple EarPods 2',
            price: 2327,
            rate: 4.5,
        },]
    },
    {
        name: 'Беспроводные наушники',
        array: [{
            image: img2,
            name: 'Apple AirPods 3',
            price: 9527,
            priceWithoutDiscount: 3527,
            rate: 4.7,
        },
        {
            image: img2,
            name: 'GERLAX GH-04',
            price: 6527,
            rate: 4.7,
        },
        {
            image: img2,
            name: 'BOROFONE BO4',
            price: 7527,
            rate: 4.7,
        },]
    }
]


export default ItemsList