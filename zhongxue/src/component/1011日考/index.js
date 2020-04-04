import React,{Component} from 'react'
import Select from './select'
class Grandson extends Component{
    render(){
        return <div style={{background:'#ccc',marginTop:50}}>温洋
            
            <span onClick={()=>this.props.changeTell('我不的')}>X</span>
            <p>
            {this.props.tell}
            </p>
            <p>
            {this.props.tellHou}
            </p>
            <p>
            {this.props.tellWang} 
            </p>
        </div>
    }
}

class SonValue extends Component{

    render(){
        return <div>
          {
              this.props.name.map((item,index) =>{
                  return <div key={index}>
                            <span>{item}</span>
                            <span onClick={()=>this.props.changeName(index)}>X</span>
                    </div>
                  
              })
          }
        <Grandson {...this.props}/>  
        </div>
    }
}


class Pullselect extends Component{
    state={
        name:['于鑫淼','徐小冰','郭宝兴'],
        tell:'明天检查你作业',
        tellHou:'告诉候利杰，我也检查你作业',
        tellWang:'检查作业'
    }

    changeName=(val)=>{
        let {name} = this.state;
        name.splice(val,1);
        this.setState({name})
    }

    changeTell=(value)=>{
        this.setState({tell:value})
    }
    render(){
        console.log({...this.state})
        return <div>
                <p>请选择理论考试名单</p>
                <SonValue  {...this.state}  changeName={this.changeName} changeTell={this.changeTell}/>   


                <Select />      
        </div>
    }
}

export default Pullselect