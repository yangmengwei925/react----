import React,{Component} from 'react';
import B from './b'
import {Provider} from './context'

class C extends Component{
    state={
        name:'杨梦伟',
        age:'18'
    }
    render() {
        return (
            <Provider value={this.state}>
                    <div>
                        <B />
                    </div>
            </Provider>
           
        )
    }
}
export default C