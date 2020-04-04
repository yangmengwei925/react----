import React ,{Component} from 'react';
import './talk.css';
class Talk extends Component{
    state={
        list:[]
    }


    leftFunction=(stringName)=>{
        let {list} = this.state;
        let obj ={
            value:null,
            roll:null
        }
        if(stringName === 'leftPerson' ){//如果是左边的人物点击的发送
            obj.value = this.refs.leftPerson.value;
            obj.roll  = 'father';
        }else{//如果是右边的人物点击的发送
            obj.value = this.refs.rightPerson.value
            obj.roll  = 'son'
            
        }
        list.push(obj);
        this.setState({list})
    }


    render(){
        const {list}  =this.state;
        return <div className="talk_out">
                <div>左边人物1：
                    <input type="text" ref="leftPerson"/>
                    <button onClick={()=>this.leftFunction('leftPerson')}>发送</button>
                </div>
                <div>右边人物2：
                    <input type="text" ref="rightPerson"/>
                    <button onClick={()=>this.leftFunction('rightPerson')}>发送</button>
                </div>
                {
                    list.map((item,key)=>{
                    return <p key={key} className={item.roll}>
                                <img className="title_img" src={require('../../static/images/'+item.roll+'.jpg')} />
                                {item.value}
                            </p>
                    })
                }

                <button>更换身份</button>
        </div>
    }
}

export default Talk