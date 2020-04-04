import React ,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

class RouterView extends Component{
    render(){
        const {routers} = this.props
        return <Switch>
                {
                    routers.map((item,index)=>{
                       if(item.type==='redirect'){
                           return <Redirect  key={index} from={item.from} to={item.to}></Redirect>
                       }
                       if(item.type==='route'){
                            return <Route key={index} path={item.path} render={mes=>{
                                let Com = item.component
                                let allprops = {...this.props,...mes}
                                return <Com {...allprops} routers={item.childrens}/>
                            }}></Route>
                       }
                    })
                }
        </Switch>
    }
}

export default RouterView