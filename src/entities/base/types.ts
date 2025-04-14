export interface IItem {
    image: string,
    name: string,
    price: number,
    priceWithoutDiscount?: number,
    rate: number
}

export interface IItems {
    name: string,
    array: IItem[]
}
