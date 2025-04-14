import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IShoppingCart {
    image: string,
    name: string,
    price: number,
    how: number
}

const storedData = localStorage.getItem('shoppingCard');
let parsedData: IShoppingCart[] = []

if (storedData !== null) {
    parsedData = JSON.parse(storedData);
}

const initialState: IShoppingCart[] = parsedData

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: initialState,
    reducers: {
        addToShoppingCart(state, action: PayloadAction<IShoppingCart>) {
            state.push({ image: action.payload.image, name: action.payload.name, price: action.payload.price, how: action.payload.how })

            localStorage.setItem('shoppingCard', JSON.stringify(state))


        },


        deleteIntoShoppingCart(state, action: PayloadAction<string>) {
            const founded: IShoppingCart | undefined = state.find(item => item.name === action.payload)
            if (founded) {
                state = state.filter(item => item !== founded)

                localStorage.setItem('shoppingCard', JSON.stringify(state))

                return state
            }
        },

        addCounter(state, action: PayloadAction<string>) {
            const founded: IShoppingCart | undefined = state.find(item => item.name === action.payload)
            if (founded) {
                founded.how += 1
            }
        },

        substractCounter(state, action: PayloadAction<string>) {
            const founded: IShoppingCart | undefined = state.find(item => item.name === action.payload)
            if (founded && founded.how > 1) {
                founded.how -= 1
            }
        }
    }
})

export const { addToShoppingCart, addCounter, substractCounter, deleteIntoShoppingCart } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
