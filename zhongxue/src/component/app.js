import React,{Component} from 'react';
import FistRouter from '../router';

import store from '../store';
import {Provider} from 'react-redux'

class App extends Component{
    render(){
        return <Provider store={store}>
                <FistRouter />
            </Provider>
    }
}

export default App