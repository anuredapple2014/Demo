import types from "../types"
import store from "../store"
const {dispatch} = store; 
export function increment(data){
    dispatch({
        type: types.INCREMENT,
        payload:data
    })
 
}

