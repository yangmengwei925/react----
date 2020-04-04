import Mock from '../mock'

export default function Mocknetwork(url,obj={}){
    return new Promise(res=>{
        setTimeout(()=>res(Mock[url](obj)),Math.random()*1000)
    })
}