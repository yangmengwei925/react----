import React ,{Component} from 'react'
import Mocknetwork from '../../until'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
class Headers extends Component{
    state={
        navList:[]
    }
    render(){
        const {navList} = this.state;
        const {indexDefult,changeIndex} = this.props;
        return  <ul className="header_ul">
                    {
                        navList.map((item,index)=>{
                            return <li className={parseInt(indexDefult)===index?'activ':''} key={index} onClick={()=>changeIndex(index)}>
                                <Icon type={item.icon} />
                                <Link to={item.to}>{item.name}</Link>
                                </li>
                        })
                    }
                </ul>
    }
    componentDidMount(){
        //组件初始化做数据请求
        Mocknetwork('/nav/list').then(data=>{
            this.setState({navList:data})
        })
    }
}
export default Headers