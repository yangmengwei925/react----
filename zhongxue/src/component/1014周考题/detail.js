import React from 'react'
import {Mocknetwork} from '../../until'

class Detail extends React.Component{
    state={
        obj:[]
    }
    render(){
        
       const {obj} = this.state
        return <div>
            {/* 循环对象 */}
            {/* for in     object.keys */}
            {
                // 循环数据
                Object.keys(obj).map((item,index)=>{
                    if(item==='pic'){
                        return <img key={index} width="100" src={require('../../static'+obj[item])}/>
                    }
                    else{
                        return <p key={index}>{obj[item]}</p>
                    }
                    
                })
            }
        </div>
    }
    componentDidMount(){
        //拿着动态参数 id 求情数据接口 并且赋值state
        Mocknetwork('/content/list',{id:this.props.match.params.id}).then(data=>{
            this.setState({obj:data})
        })
    }
}
export default Detail