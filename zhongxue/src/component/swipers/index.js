import React,{Component} from 'react';

import 'swiper/css/swiper.css';
import Swiper from 'swiper' ;

class Swipers extends Component{
    render(){
        return <div className='swipers'>
                <div className="swiper-container"  style={{width: 300,height: 200}}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require('../../static/images/1.png')}/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../../static/images/1.png')}/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require('../../static/images/1.png')}/>
                        </div>
                    </div>
                {/*  如果需要分页器 */}
                    <div className="swiper-pagination"></div>
                    
                {/* 如果需要导航按钮 */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                
                {/* 如果需要滚动条 */}
                    <div className="swiper-scrollbar"></div>
            </div>
        </div>
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项 vertical
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })   
        }
}
export default Swipers