import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from '../component/home'
import Login from '../component/login'
import Edit from '../component/edit'

class RootRouter extends React.Component{
    render(){
      return <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Redirect from="/" to="/login"></Redirect>
            </Switch>
      </BrowserRouter>
    }
  }
  
  export default RootRouter;
  