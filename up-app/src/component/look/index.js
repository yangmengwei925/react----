import React from 'react';
import {Input,Button} from 'antd'

class Look extends React.Component{
    state = this.props.location.state
   
  render(){
      const {key,name,age,phone,lover,sex,work} =this.state
    return <div>
        职员编号:<Input defaultValue={key} type="text"   />
        职员名称:<Input defaultValue={name} type="text"  />
        职员年龄:<Input defaultValue={age} type="text"    />
        职员电话:<Input defaultValue={phone} type="text" />
        职员爱好:<Input defaultValue={lover}  type="text" />
        职员性别:<Input defaultValue={sex} type="text"    />
        职员岗位:<Input defaultValue={work} type="text"   />
        <Button onClick={()=>{
            this.props.history.push('/home/list')
        }}>返回</Button>
    </div>
  }
}

export default Look;