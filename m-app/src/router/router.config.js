import React from 'react'

import Main from '../component/main'
import Login from '../component/login'
import SwiperGroup from '../component/swiper'
import My from '../component/my'
import Order from '../component/order'
import Find from '../component/find'
import Detail from '../component/order/detail'
let routerConfig = [
    {
        type:'route',
        path:'/main',
        component:Main,
        childrens:[
            {
                type:'route',
                path:'/main/main',
                component:SwiperGroup,
                childrens:[
                    {
                        type:'route',
                        path:'/main/main/abc',
                        component:()=><div>内容为abc</div>,
                        childrens:[]
                    },
                    {
                        type:'route',
                        path:'/main/main/def',
                        component:()=><div>内容为def</div>,
                        childrens:[]
                    }
                ]
            },
            {
                type:'route',
                path:'/main/order',
                component:Order,
                childrens:[]
            },
            {
                type:'route',
                path:'/main/find',
                component:Find,
                childrens:[]
            },
            {
                type:'route',
                path:'/main/my',
                component:My,
                childrens:[]
            },
            {
                type:'redirect',
                from:'/main',
                to:'/main/main'
            }

        ]
    },
    {
        type:'route',
        path:'/login',
        component:Login,
    },
    {
        type:'route',
        path:'/detail/:id/:city/:title',
        component:Detail,
    },
    {
        type:'redirect',
        from:'/',
        to:'/main'

    }
]

export default routerConfig