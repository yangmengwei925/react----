import React,{PureComponent}from 'react'
import {Link} from 'react-router-dom'
class Header extends PureComponent{
    render(){
        return <div>
            <button onClick={()=>this.props.history.goBack()}>点击回退</button>
            <Link to="/login/123456789">用match</Link>
        </div>
    }
}

export default Header