import React,{Component} from 'react'


/**
 * 1.实例期 组件初始化
 * 2.存在期 this.setstate/ this.props
 * 3.销毁期 
 */
class ShengMing extends Component{

    //
    constructor(props){
        super(props)
    }
    //
    componentWillMount(){
        console.log(this.props)
    }
    //
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps)
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    render(){
        return <div>
            {this.props.name}

            {/* <button onClick={()=>this.setState({name:'王旭'})}>换名</button> */}
        </div>
    }
    //
    componentDidMount(){

    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){

    }
}

class Father extends Component{
    state={
        name:'张卓'
    }
    render(){
        return <div>
            <button onClick={()=>this.setState({name:'白绍成'})}>改变传入的props</button>
            <ShengMing name={this.state.name}/>
        </div>
    }
}



export default Father