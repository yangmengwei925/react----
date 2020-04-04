import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
let reducer = function(state,action){

    if(action.type==='ADD'){
        state.data.push(action.value)
        state.data = [...state.data]
    }

    return {...state}
}
let initstate = {
    headerlist:[
        {
            title:'点菜',
            to:'/home/main'
        },
        {
            title:'评价',
            to:'/home/talk'
        },
        {
            title:'商家',
            to:'/home/shop'
        }
    ]
}
let store = createStore(reducer,initstate,applyMiddleware(thunk))

export default store

