import React,{Component} from 'react'

class Option extends Component{
    render(){
        return <div>
            {
                    this.props.name.map(item=>{
                        return <p key={item} onClick={()=>this.props.changeTilteValue(item)}>{item}</p>
                    })
            }
        </div>
    }
}
class Select extends Component{
    state={
        title:'请选择',
        option:[1,2,3],
        isShow:true
    }
    changeTilteValue =(value)=>{
        this.setState({title:value})
    }

    render(){
        const {option,isShow,title} = this.state;
        return <div style={{background:'pink',marginTop:50}}>
               <p ref="pname" onClick={()=>this.setState({isShow:!isShow})}>{title}</p>
               {
                isShow?'':<Option name={option} changeTilteValue={this.changeTilteValue}/>
               }  
        </div>
    }
    componentDidMount(){
   
    }
}

export default Select