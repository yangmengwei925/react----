import React,{Component} from 'react'

class My extends Component{
    state={
        username:''
    }
     //点击退出按钮
     loginOut=()=>{
        //清空本地存储
        localStorage.clear();
        //回到登录页
        this.props.history.push('/login')
    }
    render(){
        const {username} = this.state
        return <div>
             {/* 点击退出 清除本地存储 跳转登录页 */}
             <p className='top_p'>{username}|<span onClick={()=>this.loginOut()}>退出</span></p>
        </div>
    }
    componentDidMount(){
        //页面展示本地存储的用户名
        this.setState({username:localStorage.getItem('username')})
 
    }
}
export default My