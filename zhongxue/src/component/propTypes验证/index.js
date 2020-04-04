import React,{PureComponent}from 'react'
import propTypes from 'prop-types'


class Son extends React.PureComponent{

    static propTypes ={
        list:propTypes.array
    }

    render(){
        return <div>
            <p>{this.props.name}</p>
            {
                this.props.list.map((item,key)=>{
                    return <p key={key}>{item}</p>
                })
            }
            <button onClick={()=>this.props.fatherFunc()}>点击执行父亲给的函数</button>
            {this.props.children}
            {console.log(this.props)}
        </div>
    }
}

// Son.propTypes ={
//     list :propTypes.array,
//     name:propTypes.string,
// }


class AnimateTest extends React.Component{

    state={
        list:['宋瑞佳'],
        name:'侯利杰',
        arr:['a','b','c']
    }
    fatherFunc =()=>{
        console.log('父亲的函数')
    }
    render(){
        return <div>
           <Son name={this.state.name} list={this.state.list} fatherFunc={this.fatherFunc} >
              <p>ghjkl</p>          
           </Son>
        </div>
    }
}

export default AnimateTest