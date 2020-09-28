import {
    ADD_TO_ITEM,
    DELETE_TODO_ITEM,
    CHANGE_INPUT_VALUE
} from "../store/actionType"    


export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const addtoitemAction = ()=>({
    type: ADD_TO_ITEM,
})

export const deletetodoitemAction = (index)=>({
    type: DELETE_TODO_ITEM,
    index
})