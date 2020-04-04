import React,{Component} from 'react';
 
class Name extends Component{
    state={
        name:'郭宝兴'
    }
    //改名字的函数
    changeName =()=>{   
       this.setState({name:this.refs.guobaoxing.value})
    }
  
    render(){
        return (
            <div>
                    {this.state.name}
                    <input ref="guobaoxing" type="text"/>
                    <button onClick={()=>this.changeName()}></button>
            </div>
           
        )
    }
}

export default Name