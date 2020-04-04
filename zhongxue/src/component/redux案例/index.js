import React from 'react'
import {connect} from 'react-redux'

class Demo extends React.Component{
    render(){
        return <div>
               
                <h1>购物车</h1>
                {console.log(this.props)}
                <span onClick={()=>this.props.dis()}>-</span>
                <span>{this.props.count}</span>
                <span onClick={()=>this.props.add()}>+</span>
                <h1>作业</h1>
                <input type="text" ref="inp"/>
                <button onClick={()=>this.props.addArray(this.refs.inp.value)}>点击添加</button>
                {/* 添加完展示 */}
                {
                    this.props.list.map((item,index)=>{
                        return <p key={index}>{item}<span onClick={()=>this.props.disArray(index)}>删除</span></p>
                    })
                }
        </div>
    }
}

let mapStateToProps = function(store){
    const {count,list} = store
    return {
        count,
        list
    }
}
let mapDispatchToprops = function(dispatch){
    return {
        //购物车的两个函数
        dis:function(){
            dispatch({type:'DIS_COUNT'})
        },
        add:function(){
            dispatch({type:'ADD_COUNT'})
        },
        //作业 
        //添加一条数据进仓库
        addArray:function(val){
            dispatch({type:'ADD_DATA',value:val})
        },
        //删除数据
        disArray:function(key){
            dispatch({type:'DIS_DATA',key:key})
        }
    }
}
Demo = connect(mapStateToProps,mapDispatchToprops)(Demo)


export default Demo