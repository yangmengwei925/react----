import React from 'react';
import { Input,Button,Table ,Tag} from 'antd';
import Mocknetwork from "../../until"

//引出connect
import {connect} from 'react-redux'

class List extends React.Component{

    state={
          columns : [
            {
              title: '职员姓名',
              dataIndex: 'name',
              key: 'name',
              render:(value)=>{
                  return <div>
                    <input type="checkbox"/>{value}
                  </div>
              }
            },
            {
              title: '电话号码',
              dataIndex: 'phone',
              key: 'phone',
            },
            {
                title: '操作',
                key: 'work',
                dataIndex: 'work',
                render:(value,item,key)=>{
                  return <div>
                         <Tag onClick={()=>this.props.history.push({pathname:'/home/edit',state:item})}>编辑</Tag> 
                         <Tag onClick={()=>this.props.Delete(item.key)}>删除</Tag> 
                         <Tag onClick={()=>this.props.history.push({pathname:'/home/look',state:item})}>查看</Tag> 
                  </div>    
          }
                
              },
          ]

    }

  //搜索
  searchData=()=>{
    
    let key = this.refs.key.input.value;
    let name = this.refs.name.input.value;
 
    Mocknetwork('/search/list',{key:key,name:name}).then(
      data=>{
        this.setState({data})
      }
    )
  }
  render(){
    return <div>
        <div style={{padding:20}}>
            <Input style={{width:200}} ref="key" placeholder="职员编号" />
            <Input style={{width:200}} ref="name" placeholder="职员姓名" />
            <Button type="primary" onClick={()=>this.searchData()}>搜索</Button>
            <div onClick={()=>{
              this.props.defaultSelectedKeysFun('2')
              this.props.history.push('/home/add')
            }}>添加职员</div>
        </div>

        <div>
            <Table columns={this.state.columns} dataSource={this.props.data}  />
        </div>
    </div>
  }
  componentDidMount(){
        this.props.initData()
  }
}


let MapStateToProps =function(store){
      const {data} = store
  return {
    data
  }
}
let MapDispatchToProps =function(dispatch){
  return {
      //初始化数据 请求接口 修改redux仓库data
      initData:function(){
        Mocknetwork('/all/list').then(data=>{
          dispatch({type:'CHANGE_DATA',value:data})
        })
      },
      Delete:function(key){
        Mocknetwork('/delete/list',{key:key}).then(data=>{
          if(data){
            alert('删除成功')
            dispatch({type:'CHANGE_DATA',value:data})
          }
          else{
            alert('稍后再试')
          } 
        })
      }
  }
  }

List = connect(MapStateToProps,MapDispatchToProps)(List)
export default List;

