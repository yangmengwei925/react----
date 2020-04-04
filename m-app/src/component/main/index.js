import React,{Component} from 'react'
import './main.css'
import Headers from './header'
import RouterView from '../../router/router.view'
class Main extends Component{
  
    //改变首页导航坐标 实现高亮的函数 提供给子组件Header调用
    changeIndex=(index)=>{
       localStorage.setItem('indexDefult',index)
    }
    componentWillMount(){
        if(localStorage.getItem('indexDefult')===null){
            localStorage.setItem('indexDefult',0)
        }  
    }
    render(){
        let indexDefult = localStorage.getItem('indexDefult')
        console.log(indexDefult)
        return <div>
            {/* 导航渲染 */}
            <Headers indexDefult={indexDefult} changeIndex={this.changeIndex}/>  


            {/* 路由配置项 */}
            <RouterView routers={this.props.routers}/>
        </div>
    }
   

   
}

export default Main