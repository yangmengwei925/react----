import Mock from '../mock'
export default function Mocknetwork(url,obj={}){
    return new Promise(res=>{  
        setTimeout(()=>{
            if(!Mock[url]) return '接口不存在'
            res(Mock[url](obj))
        }
        ,Math.random()*1000)
    })
}