//创建仓库

import {createStore} from 'redux'

let reducer = function(state,action){

    if(action.type==='ADD'){
        state.list.push(action.value)
       
    }
    if(action.type==='DELETE'){
        state.list.splice(action.key,1)
      
    }
    if(action.type==='REPLACE'){
        //查找数组下标
        let key = state.list.findIndex(item=>item===action.value)
        
        state.list.splice(key,1,action.value)
       
    }

    state.list = [...state.list]
    return {...state}
}

let initState = {
    list:[]
}
let store = createStore(reducer,initState)



export default store
