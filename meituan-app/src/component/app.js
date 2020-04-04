import React,{Component} from 'react'
import RootRouter from '../router'

//第二步 导出仓库
import store from '../store'
import {Provider} from 'react-redux'

class App extends Component{
    render(){
        return <Provider store={store}>
              <RootRouter />
        </Provider>
    }
}
export default App