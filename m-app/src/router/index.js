import React,{Component}from 'react'
import {BrowserRouter} from 'react-router-dom'
import routerConfig from './router.config'
import RouterView from './router.view'

class RootRouters extends Component{
    render(){
        return <BrowserRouter>
              <RouterView routers={routerConfig}/>
        </BrowserRouter>
    }
}
export default RootRouters;
