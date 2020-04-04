import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//修改仓库数据
let reducer = function(state,action){
    if(action.type === "CHANGE_DATA"){
        state.data = [...action.value]
    }
    return {...state}
}
//初始化数据
let initState = {
    data:[]
}

let store = createStore(reducer,initState,applyMiddleware(thunk))

export default store