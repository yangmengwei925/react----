import React,{PureComponent}from 'react'
import './footer.css'
import {withRouter} from 'react-router-dom'
import {Mocknetwork} from '../../until'

class Content extends PureComponent{
    state={
        contentList: []
    }
    jump=(value)=>{

       // this.props.history.push({pathname:'/detail',state:item})
        //
        this.props.history.push('/detail/'+value)
    }
    render(){
        return <div>
        {
            this.state.contentList.map(item=>{
                return <div key={item.id} className="content_out" onClick={()=>this.jump(item.id)}>
                        <img src={require('../../static'+item.pic)}/>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{item.address}</p>
                </div>
            })
        }
        </div>
    }
    componentDidMount(){

        Mocknetwork('/content/list',{}).then(data=>{
                this.setState({contentList:data})
        })
      
    }
}
Content = withRouter(Content)

export default Content