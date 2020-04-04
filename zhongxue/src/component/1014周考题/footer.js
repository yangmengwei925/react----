import React,{PureComponent}from 'react'
import { Icon } from 'antd'
import './footer.css'
import {Link} from 'react-router-dom'
class Footer extends PureComponent{
   
    render(){
        const {footerlist,defaultIndex,setdefaultIndex} = this.props
        return <div>
                <ul className="footer">
                    {
                        footerlist.map((item,index)=>{
                            return <li key={index} className={defaultIndex===index?'actives':''} onClick={()=>setdefaultIndex(index,item.to)}>
                                <Icon type={item.pic} />
                                <a className="aa" href={item.to}>{item.title}</a>
                            </li>
                        })
                    }
                  
                </ul>
        </div>
    }
}

export default Footer