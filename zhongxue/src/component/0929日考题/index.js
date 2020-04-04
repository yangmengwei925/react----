import React,{Component} from 'react'
import './nav.css'
class NavDou extends Component{
    state={
        list:['电影','图书','广播','小组'],
        defaultIndex:0,
        pic:[
            {
                title:'豆瓣图片',
                pic:'images/1.png'
            },
            {
                title:'蜡笔小新一',
                pic:'images/2.png'
            },
            {
                title:'蜡笔小新二',
                pic:'images/3.png'
            },
            {
                title:'蜡笔小新三',
                pic:'images/4.png'
            }
        ]
    }
    render(){

        // 解构出来需要用到的变量
        const {list,defaultIndex,pic} = this.state
            return <div>
                {
                    //循环图片
                    pic.map((item,index)=>{
                        return <div>
                            <p>{item.title}</p>
                            <img src={require('../../static/'+item.pic)}/>
                        </div>
                    })
                }

                <ul>
                    {
                        // 循环list数据
                        list.map((item,index)=>{
                            return <li 
                            className={['li_style',defaultIndex===index?'active':''].join(' ')} 
                            key={index}
                            onClick={()=>this.setState({defaultIndex:index})}
                            >{item}</li>
                        })
                    }
                </ul>
               
            </div>
    }
}

export default NavDou
