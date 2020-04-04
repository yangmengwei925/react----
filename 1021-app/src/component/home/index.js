import React from 'react'
import {Switch,Route,Redirect,Link} from 'react-router-dom'
import Top from './top'
class Home extends React.Component{
    render(){
        return <div>

           <Switch>
                    <Route path="/home/list" component={Top}></Route>
                    <Route path="/home/ask" component={()=><div>ask</div>}></Route>
                    <Route path="/home/school" component={()=><div>school</div>}></Route>
                    <Route path="/home/my" component={()=><div>my</div>}></Route>
                    <Redirect from="/home" to="/home/list"></Redirect>
           </Switch>
           <Link to="/home/list">首页</Link>
           <Link to="/home/ask">问答</Link>
           <Link to="/home/school">学校</Link>
           <Link to="/home/my">我的</Link>
        </div>
    }
}

export default Home