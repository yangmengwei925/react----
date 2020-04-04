import React,{Component} from 'react'
import Mocknetwork from '../../until'

class Main extends Component{
   state={
       data:[],
       defaultIndex:0,
       subData:[],
       isShow:false
   }
   //点击时候改变高亮 同时改变subdata 数据
   tabData=(index,item)=>{
        this.setState({defaultIndex:index,subData:item.shopmenuFoods})
   }
   //点击减
   dis=(item,type)=>{
        Mocknetwork('/list/dis',{item,type}).then(data=>{
            this.setState({data:data})
        })
   }
   //计算data的mute
   countMute=(type)=>{
        const {data} = this.state
        let num      = 0
        //计算mute
        data.forEach(i=>{
            i.shopmenuFoods.forEach(j=>{
                
                if(type==='num'){
                    num+=j.mute
                }

                if(type==='price'){
                    num+=j.mute*j.price
                }
            })
        })
        return num
   }

    render(){
       
        const {data,defaultIndex,subData,isShow} = this.state
        return <div className="main">
           
           {/* 选项卡 */}
            
            <ul>
                {
                    data.map((item,index)=>{
                        return <li key={index} className={defaultIndex===index?'high':''} onClick={()=>this.tabData(index,item)}>{item.title}</li>
                    })
                }
            </ul>
            {/* 初始化显示的数据 */}
            <div className="content">
                {
                    subData.map((item,index)=>{
                        return <div key={index} style={{background:'#ccc'}}>
                            <p>{item.name}</p>
                            <p>
                            <span onClick={()=>this.dis(item,'dis')}>-</span>
                            {item.mute}
                            <span onClick={()=>this.dis(item,'add')}>+</span>
                            </p>
                            <p>{item.price}</p>
                        </div>
                    })
                }
            </div>
           {/* 底部 */}
           <div className="footer">
               <span onClick={()=>this.setState({isShow:!isShow})}>购物车</span>
               <span>总数:{this.countMute('num')}</span>
               <span>总价:{this.countMute('price')}</span>
               <span onClick={()=>this.props.history.push('/login')}>去结算</span>
           </div>
           {
               isShow?<div className="alerts">
                   {
                       data.map(i=>{
                           return i.shopmenuFoods.map((j,index)=>{
                                if(j.mute>0){
                                    return <div key={index} style={{background:'#ccc'}}>
                                            <p>{j.name}</p>
                                            <p>
                                            <span onClick={()=>this.dis(j,'dis')}>-</span>
                                            {j.mute}
                                            <span onClick={()=>this.dis(j,'add')}>+</span>
                                            </p>
                                            <p>{j.price}</p>
                                        </div>
                                }
                               
                           })
                       })
                   }
               </div>:null
           }
        </div>
    }
    componentDidMount(){
        Mocknetwork('/list/data').then(data=>{
            this.setState({data:data,subData:data[0].shopmenuFoods})
        })
    }
}
export default Main