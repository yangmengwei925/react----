import React from 'react'
import Mocknetwork from '../../until'
class Detail extends React.Component{
   state={
       detailItem:this.props.location.state.item
   }
    changedata=(id)=>{
        Mocknetwork('/change/data',{id:id}).then(data=>{
            console.log(data)
            this.setState({detailItem:data[id]})
          })
    }
    render(){
        const {detailItem} = this.state
        return <div>
                <p><span>id</span>:{detailItem.id}</p>
                <p><span>dec</span>:{detailItem.dec}</p>
                <p><span>title</span>:{detailItem.title}</p>
                <button onClick={()=>this.changedata(detailItem.id)}>+{detailItem.count}</button>    
                <button onClick={()=>this.props.history.push('/home/list/guan')}>返回</button>        
        </div>
    }
}

export default Detail