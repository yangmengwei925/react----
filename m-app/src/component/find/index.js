import React from 'react'
import {connect} from 'react-redux'


class Find extends React.Component{
    render(){
        console.log(this.props)
        return <div>
            <input type="text" ref="inputName"/>
            <button onClick={()=>this.props.add.call(this)}>添加</button>
            {
                this.props.list.map((item,key)=>{
                    return <div key={key}>
                        <p>{item}</p>
                        <button onClick={()=>this.props.delete(key)}>删除</button>
                        <button onClick={()=>this.props.replaces.call(this)}>替换</button>
                        <input type="text" ref="replaceName"/>

                    </div>
                })
            }
        </div>
    }
}
//组件读取仓库数据
let mapStateToProps = function(data){
    const {list} = data
    return {
        list,
    }
}
// 

function ABC(a,b,c,d){
    // 1.函数的参数
    // 2.函数的返回值
    // 3.函数的this  谁调用了它 它就指向谁  call apply bind
    // 4.函数在哪被调用的
    // 5 函数的功能
}



let mapDispatchToProps = function(dispatch){
    return {
        add:function(){
            dispatch({type:'ADD',value:this.refs.inputName.value})
            this.refs.inputName.value = ''
        },
        delete:function(key){
            dispatch({type:'DELETE',key:key})
        },
        replaces:function(){
            dispatch({type:"REPLACE",value:this.refs.replaceName.value}) 
        }
    }
}

Find = connect(mapStateToProps,mapDispatchToProps)(Find)

export default Find 