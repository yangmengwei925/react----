import React from 'react'
import './shoping.css'
class Shoping extends React.Component{
    state={
        shoping:[
            {
                pic:'images/2.png',
                title:'夏威夷果',
                price:'19.9',
                count:1
            },
            {
                pic:'images/3.png',
                title:'碧根果',
                price:'29.9',
                count:1
            },
            {
                pic:'images/4.png',
                title:'皮蛋卷',
                price:'9.9',
                count:1
            }
        ],
        data:[]
    }
    dis=(key,type)=>{
        const {shoping} = this.state;
        if(type=== 'dis'){
            if(shoping[key].count>0){
                --shoping[key].count
            }
        }
        else if(type==='add'){
            ++shoping[key].count
        }
        this.setState({shoping})
    }

    //获取
    getData=(item)=>{
        let {data} = this.state;
        //判断当前 数组是否含有item 
       let result = data.some(i=>i.title===item.title)

        if(result){
        //存在 改变count
            data.forEach(i=>{
                if(i.title === item.title){
                     i.count = i.count+item.count
                 }   
             })
        }else{
        //不存在 push
            data.push(item);
        }

       

        this.setState({data});
    }
    render(){
        const {shoping,data} = this.state
        return <div>
            {
                shoping.map((item,key)=>{
                    return <div key={key} className="shop_out">
                            <p>{item.title}</p>
                            <img src={require('../../static/'+item.pic)}/>
                            <p>{item.price}</p>
                            <div>
                                <span onClick={()=>this.dis(key,'dis')}>-</span>
                                <span>{item.count}</span>
                                <span onClick={()=>this.dis(key,'add')}>+</span>
                            </div>
                            <button onClick={()=>this.getData(item)}>加入购物车</button>
                        </div>
                })
            }

            <div>
                购物车列表
                {
                    data.length>0&&data.map((item,key)=>{
                        return <div key={key} className="shop_out">
                            <p>{item.title}</p>
                            <p>{item.count}</p>
                        </div>
                    })
                }
            </div>
        </div>
    }
}
export default Shoping