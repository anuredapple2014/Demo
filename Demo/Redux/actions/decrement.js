import types from "../types"
import store from "../store"
const {dispatch} = store; 


export function decrement(data){
    dispatch({
        type: types.DECREMENT,
        payload:data
    })
  }