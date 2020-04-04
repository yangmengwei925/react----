import listdata from "./list.json"
import assessData from './assess.json'
export default {
    '/list/data'(obj){
        return listdata
    },
    '/list/dis'(obj){
        listdata.forEach(item=>{
            item.shopmenuFoods.forEach(j=>{
                if(j.name===obj.item.name){
                    if(obj.type==='add'){
                            ++j.mute
                    }else{
                        if(j.mute>0){
                            --j.mute
                          }  
                    }    
                }
            })
        })
        return listdata
    },
    '/assess/list'(){
        return assessData
    },
    '/filter/data'(obj){
        if(obj.name==='全部'){
            return assessData
        }
        if(obj.name==='好评'){
            return assessData.filter(item=>item.level>=3)
        }
        if(obj.name==='最新发布'){

            assessData.sort((a,b)=>{
                let Adate = new Date(a.time)
                let Bdate = new Date(b.time)
                return Bdate.getTime()-Adate.getTime()
            })

            return assessData
        }
        if(obj.name==='距离最近'){
            assessData.sort((a,b)=>{
                return a.far-b.far
            })
        }
        return assessData
    }
}