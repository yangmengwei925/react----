import React,{Component} from 'react'

//高阶组件 
function GaoJie(Abc){    
    class SurperAbc extends Component{
        render(){
            return <div style={{color:'red'}}>
                <Abc {...this.props}/>
            </div>
        }
    }
    return SurperAbc
}
//普通类组件
class PT extends Component{
    render(){
        return <div>name</div>
    }
}
PT = GaoJie(PT)


export default PT