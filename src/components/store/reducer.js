import {
    ADD_TO_ITEM,
    DELETE_TODO_ITEM,
    CHANGE_INPUT_VALUE
} from './actionType'


const defaultState ={
    inputValue:'123',
    list:[1,2]
}


export default (state = defaultState,action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        // console.log(newState);
        return newState
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState
    }
    // console.log(state,action)
    return state;
}