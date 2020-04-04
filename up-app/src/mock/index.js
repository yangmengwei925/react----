import listData from './list.json'

let Mock ={
    '/all/list'(){
        return listData
    },

    '/add/list'(obj){
        if(listData.some(item=>item.key === obj.key))  return false
        listData.push(obj)
        return true
       
    },
    '/edit/list'(obj){
       // listData[obj.key] = {...obj}
        listData.splice(obj.key,1,{...obj})
        return true
    },
    '/delete/list'(obj){
        //寻找数组下标
        listData.splice(obj.key,1)
        return listData        
    },
    '/search/list'(obj){ 
        
        let newData = listData;

        //精准搜索 匹配编号
        if(obj.key!==''){
            newData = newData.filter(item=>{
                return item.key === parseInt(obj.key)
            })
        }
        //模糊搜索 匹配名字
        if(obj.name!==''){
            newData = newData.filter(item=>{ 
                // return item.name.indexOf(obj.name)!==-1
                return item.name.search(obj.name)!==-1
                //return item.name.includes(obj.name)
            })
        }
        return newData
    }
}

export default Mock