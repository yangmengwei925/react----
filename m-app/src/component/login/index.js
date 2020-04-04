import React ,{Component} from 'react'
import Mocknetwork from '../../until'
class Login extends Component{
    state={
        username:'',
        password:'',
        isShow:true
    }
    //封装一个公共方法做用户名密码的非空验证
    getData=()=>{
        const {username,password} = this.state
        // 先拿到用户输入的名称和密码
        let obj = {username,password}
         //非空校验
         if(obj.username===''||obj.password===''){
            alert('用户名或密码为空')
        }
        return obj
    }
    //点击登录
    goMain=()=>{
        const {isShow} = this.state
        let obj = this.getData();
        //跟后台接口交互一下 验证这个账号是否能够进入我们的系统
        Mocknetwork('/login/login',obj).then(data=>{
            if(data){
                //后台告知我们可以登录
                //记录当前用户名
                
                localStorage.setItem('username',obj.username)
                this.props.history.push('/main')    
            }
            else{
                 //后台告诉我们 没有账号 我们就告知用户 去注册
                let result = window.confirm('账户未注册,去注册新账户')
                if(result){
                    this.setState({isShow:!isShow})
                }
            }
        })
    }
    //点击注册
    goVer= ()=>{
        const {isShow} = this.state
        let obj = this.getData();
         //跟后台接口交互一下 我给你一个注册数据
         Mocknetwork('/login/ver',obj).then(data=>{
             if(data){
                this.setState({isShow:!isShow})
             }
         })

    }
    render(){
        const {username,password,isShow} = this.state
            return <div>
            <div>用户名:<input type="text" value={username} onChange={(ev)=>this.setState({username:ev.target.value})}/></div>
            <div>密码:<input type="password" value={password}  onChange={(ev)=>this.setState({password:ev.target.value})}/></div>
           {
               isShow?
            <button onClick={()=>this.goMain()}>登录</button>:
            <button onClick={()=>this.goVer()}>注册</button>
           }
            
        </div>
    }
}
export default Login