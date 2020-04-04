import React,{Component} from 'react'
import Header from './header'
import Fotter from './footer'
import Content from './content'

class Index extends Component{
    render(){
        return <div>
            <Header />
            <Content />
            <Fotter />
        </div>
    }
}

export default Index