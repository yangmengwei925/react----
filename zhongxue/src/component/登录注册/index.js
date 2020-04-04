import React,{Component} from 'react'
import {Mocknetwork} from '../../until'


class Login extends Component{
    state={
            username:'',
            password:'',
            isShow:false
    }
    //点击注册按钮
    userLoginIn=()=>{
        let {username,password,isShow} = this.state;
        //做非空校验
        if(username.length===0&&password.length===0){
            alert('用户名或密码不能为空')
            return 
        }
        let obj ={username,password}
        //数据接口请求
        Mocknetwork('/login/login',obj).then(data=>{
            window.confirm(data)
            this.setState({isShow:!isShow,username:'',password:''})
        })    
    }

    //点击登录按钮 
    userCheckIn=()=>{
        let {username,password} = this.state;
        if(username.length===0&&password.length===0){
            alert('用户名或密码不能为空')
            return 
        }
        Mocknetwork('/login/check',{username,password}).then(data=>{   
            if(data){
                //跳转页面
                this.props.history.push({pathname:'/main/abcd',state:{username:this.state.username}})
            }
            else{
                alert(data)
            }
        })
    }
    render(){
      
        let {username,password,isShow} = this.state
        return <div>
            <p>
                账号:
                <input type="text" value={username} onChange={(ev)=>this.setState({username:ev.target.value})}/>
            </p>
            <p>
                密码:
                <input type="password" value={password} onChange={(ev)=>this.setState({password:ev.target.value})}/>
            </p>

            {
                isShow?
                <button onClick={()=>this.userLoginIn()}>注册</button>:
                <div>
                    <button onClick={()=>this.userCheckIn()}>登录</button>
                    <p onClick={()=>this.setState({isShow:!isShow,username:'',password:''})}>还没有账号，去注册</p>
                </div>
            }  
        </div>
    }
}

export default Login