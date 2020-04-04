import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
//修改数据的函数   dispatch({type:'CHANG_LIST',value:data})

let reducer =(state,action)=>{

    if(action.type==='CHANG_LIST'){
        state.list = [...action.value]

    }
    return {...state}
}
let initState ={
    list:[]
}

let store = createStore(reducer,initState,applyMiddleware(thunk));

export default store

//applyMiddleware(thunk) 作用就是加工了dispatch  让dispatch() 从只能接受对象作为参数变成又能对象 又可以接收方法