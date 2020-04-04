import React from 'react'
import Mocknetwork from '../../until'

class Assess extends React.Component{
    state={
      data:[],
      list:['全部','好评','最新发布','距离最近'],
      defaultIndex:0
    }
    componentWillMount(){
      Mocknetwork('/assess/list').then(data=>{
          this.setState({data:data})
      })
    }
    getdata=(item,key)=>{
      console.log(item)
      this.setState({defaultIndex:key})
      Mocknetwork('/filter/data',{name:item}).then(data=>{
        this.setState({data:data})
    })
    }
    render(){
      const {data,list,defaultIndex} = this.state

        return <div>
          {
            list.map((item,key)=>{
              return <span style={{marginRight:10}} key={key} className={defaultIndex===key?'higher':''} onClick={()=>this.getdata(item,key)}>{item}</span>
            })
          }
          <div>
          </div>
          
          {
              data.map((item,index)=>{
                  return <div key={index}>
                    <p>{item.content}</p>
                    <p className="level">
                      {
                        [1,2,3,4,5].map(j=>{
                          if(j<=item.level){
                            return <span key={j} className="yellow"></span>
                          }
                          return <span key={j} ></span>  
                        })
                      }
                    </p>
                    <p>{item.time}</p>
                    <p>{item.far}km</p>
                  </div>
              })
          }
        </div>
    }
   
}


export default Assess