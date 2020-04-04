import React from 'react';
import Mocknetwork from '../../until'

class Add extends React.Component{
    state={
        "key": this.refs.key.value,
        "name": this.refs.name.value,
        "age": this.refs.age.value,
        "phone": this.refs.phone.value,
        "lover":this.refs.lover.value,
        "sex":this.refs.sex.value,
        "work":this.refs.work.value,
    }
    submit=()=>{

        Mocknetwork('/add/list',this.state).then(data=>{
            if(data){
                this.props.history.push('/home/list')
            }
            else{
                alert('数据库有该id 添加失败')
            }
        })

    }
  render(){
    return <div>
        职员编号:<input ref="key" type="text"/>
        职员名称:<input ref="name" type="text"/>
        职员年龄:<input ref="age" type="text"/>
        职员电话:<input ref="phone" type="text"/>
        职员爱好:<input ref="lover"  type="text"/>
        职员性别:<input ref="sex" type="text"/>
        职员岗位:<input ref="work" type="text"/>
        <button onClick={()=>this.submit()}>提交</button>
    </div>
  }
}

export default Add;