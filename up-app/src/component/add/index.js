import React from 'react';
import Mocknetwork from '../../until'
import {Input,Button} from 'antd'



class Add extends React.Component{
  
    state= {
        "key": '',
        "name": '',
        "age": '',
        "phone": '',
        "lover":'',
        "sex":'',
        "work":''
    }

    submit=()=>{
        let url = '/add/list';
      
        Mocknetwork(url,this.state).then(data=>{
            if(data){
                this.props.defaultSelectedKeysFun('1')
                this.props.history.push('/home/list')
            }
            else{
                alert('失败')
            }
        })

    }
  render(){
      const {key,name,age,phone,lover,sex,work} =this.state
    return <div>
        职员编号:<Input value={key} type="text"    onChange={(ev)=>this.setState({key:ev.target.value})}/>
        职员名称:<Input value={name} type="text"   onChange={(ev)=>this.setState({name:ev.target.value})}/>
        职员年龄:<Input value={age} type="text"    onChange={(ev)=>this.setState({age:ev.target.value})}/>
        职员电话:<Input value={phone} type="text"  onChange={(ev)=>this.setState({phone:ev.target.value})}/>
        职员爱好:<Input value={lover}  type="text" onChange={(ev)=>this.setState({lover:ev.target.value})}/>
        职员性别:<Input value={sex} type="text"    onChange={(ev)=>this.setState({sex:ev.target.value})}/>
        职员岗位:<Input value={work} type="text"   onChange={(ev)=>this.setState({work:ev.target.value})}/>
        <Button onClick={()=>this.submit()}>提交</Button>
    </div>
  }
}

export default Add;