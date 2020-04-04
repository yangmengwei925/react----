import React,{Component} from 'react'
import './header.css'
class Header extends Component{
    state={
        list:[
            {
                title:'首页',
                second:[]
            },
            {
                title:'图标库',
                second:['多色','单色']
            },
            {
                title:'图标管理',
                second:['图标','收藏','项目']
            },
            {
                title:'阿里巴巴',
                second:[]
            }]
    }
    render(){
        const {list} = this.state
        return <div className='header_out'>
            {/* 导航 */}
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li className="header_li" key={index}>{item.title}
                                            <ul className="second_out">
                                                {
                                                     item.second.map((item,index)=>{
                                                         return <li className='second_li' key={index}>{item}</li>
                                                     })
                                                }
                                              
                                            </ul>
                                    </li>
                        })
                    }
                </ul>
                <div className="car">
                    购物车
                </div>
                
        </div>
    }
}

export default Header