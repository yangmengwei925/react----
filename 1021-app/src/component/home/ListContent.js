import React from 'react'
import Mocknetwork from '../../until'
class ListContent extends React.Component{
  
    state={
        list:[]
    }
    jumpDetail=(item)=>{
        // this.props.history.push({pathname:'/detail',state:{item}})
        this.props.history.push('/detail',{item})
    }
    render(){
       
        return <div>
            {
                this.state.list.map(item=>{
                    return <div key={item.id} style={{background:'red'}} onClick={()=>this.jumpDetail(item)}>
                        <p> {item.title}</p>
                        <p> {item.count}</p>
                        <p> {item.dec}</p>
                    </div>
                })
            }
        </div>
    }
    componentDidMount(){
        //页面初始化数据请求
        Mocknetwork('/list/data').then(data=>{
            this.setState({list:data})
        })
    }
}
export default ListContent