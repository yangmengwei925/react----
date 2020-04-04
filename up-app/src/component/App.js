import React from 'react';
import RootRouter from '../router'

import {Provider} from 'react-redux'
import store from '../store'

class App extends React.Component{
  render(){
    return <Provider store={store}>
        <RootRouter/>
    </Provider>
  }
}

export default App;
