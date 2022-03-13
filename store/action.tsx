import { ADD_BASKET, REMOVE_BASKET, SNACK_TYPE } from "./types"

export const setSnackCategory = (snack: string) => ({
    type: SNACK_TYPE,
    payload: snack
})

export const setAddBasket = (snack: string) => ({
    type: ADD_BASKET,
    payload: snack
})

export const setRemoveBasket = (snack: string) => ({
    type: REMOVE_BASKET,
    payload: snack
})