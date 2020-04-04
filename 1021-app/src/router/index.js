import React from 'react'
import { BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from '../component/home'
import Detail from '../component/home/detail'
class RootRouter extends React.Component{
    render(){
        return <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Redirect from="/" to="/home"></Redirect>
        </Switch>
        </BrowserRouter>
    }
}

export default RootRouter