import React,{Component} from 'react'
import { connect } from "react-redux";
import { Switch,Route,Redirect } from "react-router-dom"
import Main from './main'
import Assess from './assess'
import './home.css'

class Home extends Component{
    state={
        defaultIndex:0
    }
    render(){
        const {defaultIndex} = this.state
        return <div>
                <ul className="header">
                    {
                        this.props.headerlist.map((item,index)=>{
                            return <li key={index} className={defaultIndex===index?'act':''} onClick={()=>{
                                this.setState({defaultIndex:index})
                                this.props.history.push(item.to)
                            }}>{item.title}</li>
                        })
                    }
                </ul>
                <Switch>
                    <Route path="/home/main" component={Main}></Route>
                    <Route path="/home/talk" component={Assess}></Route>
                    <Route path="/home/shop" component={()=><div>商店</div>}></Route>
                    <Redirect from="/home" to="/home/main"></Redirect>
                </Switch>
        </div>
    }
}









let mapStateToProps = function(store){
   const {headerlist} = store
    return {
        headerlist
    }
}

Home = connect(mapStateToProps)(Home)

export default Home