import React from 'react';
class Login extends React.Component{
  render(){
    return <div>
      <button onClick={()=>this.props.history.push('/home')}>登录</button>
    </div>
  }
}

export default Login;