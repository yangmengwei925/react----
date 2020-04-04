import React,{Component,PureComponent} from 'react'

class Test extends PureComponent{
    state={
        name:{
            age:10
        },
        a:false,
        b:false,
        c:true,
        d:true
                
    }

    render(){
        let {a,b,c,d,name} = this.state
        return <div>
        <input type="checkbox" checked={a} />
        <input type="checkbox" checked={b} />
        <input type="checkbox" checked={c} />
        <input type="checkbox" checked={d} />
           <button onClick={()=>{
                    Object.keys(this.state).forEach(
                        item=>{
                            name.age =18
                            this.setState({[item]:true,name},()=>{console.log(this.state)})
                        }
                    )
                 }
              }>全选</button>
        </div>
    }
    componentDidUpdate(){
        console.log('11')
    }
}

export default Test