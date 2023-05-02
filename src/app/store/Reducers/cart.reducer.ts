import { createReducer, on } from "@ngrx/store"
import { addToCart, removeAllProducts, removeFromCart, shoppingCart } from "../Actions/cart.action"
import { initialState } from "../state/cart.state"

const _shoppingCartData = createReducer(
    initialState,
    on(shoppingCart, (state: any) => {
        return {
            ...state
        }
    }),
    on(addToCart, (state: any, action: any) => {
        return {
            ...state,
            addToCart: [...state.addToCart, action.value]
        }
    }),
    on(removeFromCart, (state: any, action: any) => {
        let removeItem = state.addToCart.filter((data: any) => {
            return data.id !== action.id
        })
        return {
            ...state,
            addToCart: removeItem
        }
    }),
    on(removeAllProducts, (state: any) => {
        return {
            ...state,
            addToCart: []
        }
    })
)

export function shoppingCartData(state: any, action: any): any {
    return _shoppingCartData(state, action)
}