import React from 'react'
import FetchnetWork from '../../until'

class NewList extends React.Component{
    state={
        newlist:[],
        page:1,
        newlistUrl:"/data/content/list.json?categoryIds=201129%2C205968&pageSize=",
        pagesize:3
    }
    //获取数据的方法
    getData=()=>{
        let {newlist,page,newlistUrl,pagesize} = this.state;
        this.setState({page:++page})
        FetchnetWork(newlistUrl+pagesize+"&pageNo="+page)
        .then(
            (data)=>{  

                //数组合并方法一 foreach
                // data.data.forEach(item=>{
                //     newlist.push(item)
                // })

                //数组合并 扩展运算符
                //newlist = [...newlist,...data.data]

                //数组合并 第三种方法 concat
                newlist = newlist.concat(data.data)
                
                this.setState({newlist})             
            }
        )
    }
    render(){
        return <div>
                新闻列表
                {
                    this.state.newlist.map(item=>{
                        return <div key={item.id}>
                            <p>{item.id}</p>
                        </div>
                        
                    })
                }
            <button onClick={()=>this.getData()}>点击加载更多</button>
        </div>
    }
    componentDidMount(){
        let {page,newlistUrl,pagesize} = this.state;
        //请求数据
        FetchnetWork(newlistUrl+pagesize+"&pageNo="+page).then(
            (data)=>{  
                this.setState({newlist:data.data})    
            }
        ).catch((error)=>{
                console.log(error)
        })
        
    }
}
export default NewList