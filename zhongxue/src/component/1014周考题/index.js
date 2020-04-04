import React,{PureComponent} from 'react'
import Content from './content'
import Footer from './footer'
import { Switch,Route,withRouter} from 'react-router-dom'

class Main extends PureComponent{
    state={
        headerlist:[
            {
                city:{
                    '北京':['海淀区','门头沟区','朝阳区'],
                    '天津':['河东区','河西区','南开区']
                },
                door:{
                    '美容门店':['轮胎清洗','轮胎保养'],
                    '轮胎门店':['洗车','换胎'],
                    '安装门店':['安装'],
                },
                sort:['默认排序','创店时间','价格最低'],
                filter:['4s店','维修厂','快修点']
            }
        ],
        footerlist:[
            {
                title:'首页',
                pic:"bank",
                to:'/main/index'
            },
            {
                title:'列表',
                pic:"database",
                to:'/main/list'
            },
            {
                title:'发现',
                pic:"search",
                to:'/main/find'
            },
            {
                title:'我的',
                pic:"smile",
                to:'/main/my'
            }
        ],
        defaultIndex:0,

    }

    setdefaultIndex=(index,url)=>{
        this.setState({defaultIndex:index})
        this.props.history.push(url)
    }

    render(){
       const {footerlist,defaultIndex} = this.state
       console.log(this.props)
        return <div>
            <Switch>
                <Route path="/main/index" component={()=><div>首页</div>}></Route>
                <Route path="/main/list" component={Content}></Route>
                <Route path="/main/find" component={()=><div>发现</div>}></Route>
                <Route path="/main/my" component={()=><div>我的</div>}></Route>
                {/* <Redirect from="/main" to="/main/index"></Redirect> */}
            </Switch>
            <Footer footerlist={footerlist} defaultIndex={defaultIndex} setdefaultIndex={this.setdefaultIndex}/>
        </div>
    }
}

Main = withRouter(Main)
export default Main