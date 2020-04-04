import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import 'swiper/css/swiper.css';
import Swiper from 'swiper' ;
import RouterView from '../../router/router.view'
class SwiperGroup extends Component{
    render(){
        return <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{background:'red'}}>slider1</div>
                        <div className="swiper-slide" style={{background:'yellow'}}>slider2</div>
                        <div className="swiper-slide" style={{background:'blue'}}>slider3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <Link to="/main/main/abc">三级tab1</Link>
                <Link to="/main/main/def">三级tab2</Link>
                
                <RouterView routers={this.props.routers}/>
        </div>
           
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            pagination: {
                el: '.swiper-pagination',
                clickable :true
              },
               
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        })
    }
}

export default SwiperGroup


