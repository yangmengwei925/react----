import React,{Component} from 'react'
import './select.css'
class Select extends Component{

    state={
        list:[
            {
                title:'理论',
                grade:[
                    {
                        q:'马超凡今天理论能考多少分？',
                        ans:'一定及格'
                    }, 
                    {
                        q:'今天谁提前交卷？',
                        ans:'未知'
                    }
                ]
            },
            {
                title:'技能',
                grade:[
                    {
                        q:'郭宝兴今天技能能考多少分？',
                        ans:'可能及格'
                    }, 
                    {
                        q:'今天谁提前交卷？',
                        ans:'未知'
                    }
                ]  
            }
        ],
        defaultIndex:0,
        defaultData:null
    }


    changeSelect=(item,index)=>{
        this.setState({
            defaultIndex:index,
            defaultData:item.grade
        })
    }
    render(){
       
        const {list,defaultIndex,defaultData} = this.state;

        let arrList = defaultData===null?list[0].grade:defaultData;

        return <div className="bgCCC">
                <h2>选项卡</h2>
                {
                    list.map((item,index)=>{
                        return <div 
                            key={index} 
                            className={["tltle",defaultIndex===index?"active":""].join(' ')}
                            onClick={()=>this.changeSelect(item,index)}>
                            {item.title}
                        </div>
                    })
                }
               {/* 数据切换 */}
                <div>
                    {  
                        arrList.map((item,key)=>{
                            return  <div key={key}>
                                        <p>{item.q}</p>
                                        <p>{item.ans}</p>
                                    </div>
                        })
                    }
                </div>
        </div>   
    }

    // componentDidMount(){
    //     //页面加载的时候设置初始化数据
    //     this.setState({defaultData:this.initData()})
    // }
}

export default Select