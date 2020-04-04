import React from 'react'
import Mocknetwork from '../../until'
import {connect} from 'react-redux'



class ListContent extends React.Component{
    jumpDetail=(item)=>{
        this.props.history.push('/detail',{item})
    }
    render(){
        return <div>
            {
                this.props.list.map(item=>{
                    return <div key={item.id} style={{background:'red'}} onClick={()=>this.jumpDetail(item)}>
                        <p> {item.title}</p>
                        <p> {item.count}</p>
                        <p> {item.dec}</p>
                    </div>
                })
            }
        </div>
    }
    componentDidMount(){
    
        // redux数据仓库的方法
        this.props.initData()
    }
}

let mapStateToProps=(store)=>{
    const {list} = store
    return{
        list
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        //请求数据 并且放到redux仓库
        initData:function(){
            Mocknetwork('/list/data').then(data=>{
                dispatch({type:'CHANG_LIST',value:data})
              })
        }
    }
}

ListContent = connect(mapStateToProps,mapDispatchToProps)(ListContent)


export default ListContent