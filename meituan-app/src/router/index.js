import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import Home from '../component/home'
import Login from '../component/login'

class RootRouter extends Component{
    render(){
        return <BrowserRouter>
              <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Redirect from="/" to="/home"></Redirect>
              </Switch>
        </BrowserRouter>
    }
}
export default RootRouter