import React,{Component} from 'react';
import style from './car.module.css';


class Car extends Component{
    state={
        size:['S','M','L'],
        count:5,
        defaultIndex:0,
        defaultSize:''
    }
    //设置高亮，并记录下当前点击的item
    getSize=(item,key)=>{
        this.setState({
            defaultIndex:key,
            defaultSize:item
        })
    }
    //点击减少数量
    dis=()=>{
        let {count} = this.state;
        if(count>0){
            count -= 1
        }
        this.setState({count})
    }
    //点击增加数量
    add =()=>{
        let {count} = this.state;
        count += 1
        this.setState({count})
    }

    //点击加入购物车
    addCar=()=>{
        const {count,defaultSize} = this.state;
        alert(count+'__'+defaultSize)
    }
    render(){
        const {count,size,defaultIndex} = this.state;
        return <div>
            <div>尺码
                {
                    size.map((item,key)=>{
                        return  <span key={key} className={[style.size,defaultIndex===key?style.yellow:''].join(' ')} onClick={()=>this.getSize(item,key)}>{item}</span>
                    })
                } 
            </div>
            <div>购买数量
                <span onClick={()=>this.dis()}>-</span>
                <span>{count}</span>
                <span onClick={()=>this.add()}>+</span>
            </div>
            <button onClick={()=>this.addCar()}>加入购物车</button>
        </div>
    }
}

export default Car