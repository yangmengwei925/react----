import Mock from '../mock'
export default function Mocknetwork(url,obj={}){
    return new Promise(
        res=>{
            if(!Mock[url]){
                alert('接口不存在')
                return
            }
            setTimeout(()=>res(Mock[url](obj)),Math.random()*1000)
        }
    )
}