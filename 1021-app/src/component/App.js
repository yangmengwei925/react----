import React from 'react';
import RootRouter from '../router'

import store from '../store'
import {Provider } from 'react-redux'

class App extends React.Component{
  render(){
    return <Provider store={store}>
        <RootRouter/>
    </Provider>
  }
}


export default App;
