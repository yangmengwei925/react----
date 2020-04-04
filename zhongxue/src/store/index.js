//利用redux创建仓库
import {createStore} from 'redux'

//reducer 函数功能：修改仓库数据
let reducer = function(state,action){
    //购物车减
    if(action.type==='DIS_COUNT'){
        if(state.count>=0){
            --state.count
        }  
    }
    //购物车加
    if(action.type==='ADD_COUNT'){
            ++state.count
    }
    //作业
    //添加一条数据进list
    if(action.type==='ADD_DATA'){
        state.list.push(action.value)

        //此处注意一下 list 是一个复杂数据类型 更改完list 需要深拷贝一下 不然视图认为你没有修改list
        state.list = [...state.list]
    }
    //list删除一条数据
    if(action.type==='DIS_DATA'){
        
        state.list.splice(action.key,1)
        //此处注意一下 list 是一个复杂数据类型 更改完list 需要深拷贝一下 不然视图认为你没有修改list
        state.list = [...state.list]
    }
    return {...state}
}

//初始化的仓库数据
let initState = {
    count:5,
    list:[]
}

let store = createStore(reducer,initState)

export default store
