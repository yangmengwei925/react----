import React from 'react'
import {Switch,Route,Redirect,Link} from 'react-router-dom'
import ListContent from './ListContent'
class Top extends React.Component{
    render(){
        return <div>
                    <Switch>
                        <Route path="/home/list/guan" component={ListContent}></Route>
                        <Route path="/home/list/tui" component={()=><div>推荐</div>}></Route>
                        <Route path="/home/list/hot" component={()=><div>热榜</div>}></Route>
                        <Redirect from="/home/list" to="/home/list/guan"></Redirect>
                    </Switch>
           <Link to="/home/list/guan">关注</Link>
           <Link to="/home/list/tui">推荐</Link>
           <Link to="/home/list/hot">热榜</Link>
        </div>
    }
    
}

export default Top