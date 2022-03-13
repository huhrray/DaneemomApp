import { ADD_BASKET, REMOVE_BASKET, SNACK_TYPE } from "./types"

const initialState = {
    snackType: "item1",
    inBasket: []
}

interface stateProps {
    snackType: string,
    inBasket: string[]
}
export const snackReducer = (state: stateProps = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SNACK_TYPE:
            return { ...state, snackType: action.payload };
        case ADD_BASKET:
            return { ...state, inBasket: [...state.inBasket, action.payload] }
        case REMOVE_BASKET:
            const newBasket = state.inBasket.filter(item => item !== action.payload)
            return { ...state, inBasket: newBasket }
        default:
            return state
    }

}