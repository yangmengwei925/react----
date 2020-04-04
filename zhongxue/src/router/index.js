import React from 'react'

import Login from '../component/登录注册'
import Main from '../component/1014周考题'
import Detail from '../component/1014周考题/detail'
import Demo from '../component/redux案例'
import {
    BrowserRouter,  //路由系统 整个项目中只出现唯一一次 
    Route, //1 地址栏访问的链接也就是url  内容 包含我们Route里的path 找到当前组件 如果想实现精准匹配 就使用exact
    Switch, // 帮助我们实现 加载唯一组件 匹配成功就中断 
    Redirect 
    
    
    //路由信息 
    // 1.history
    // 2.location
    // 3.match
} from 'react-router-dom'


class FistRouter extends React.Component{
    render(){
        return <BrowserRouter>
                   <Switch>
                        <Route path="/main" render={(mes)=>{
                            return <Main {...mes}/>
                        }}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/store" component={Demo}></Route>
                        <Route path="/detail/:id" component={Detail}></Route>
                    </Switch>
            </BrowserRouter>
    }
}
export default FistRouter