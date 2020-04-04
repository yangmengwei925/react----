import React,{Component} from 'react';
import {Consumer} from './context'

class A extends Component{
    render() {
        return <Consumer>
                {
                    (data)=>{
                        return <div>
                            {data.age}
                        </div>
                    }
                }
            </Consumer>
    }
}
export default A