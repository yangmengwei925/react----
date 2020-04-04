import Mock from '../mock'

export default function FetchnetWork(url){
     return fetch(url).then(res=>{return res.json();})
}


export function Mocknetwork(url,obj){
     return new Promise(res=>{
          if(Mock[url] === undefined ) return '接口不存在'
          
          setTimeout(
              ()=>res(Mock[url](obj)),Math.random()*1000
          )   
      })
}



