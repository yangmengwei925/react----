import listData from './list.json'

function saveData(){
    if(localStorage.getItem('listData')===null) {
        localStorage.setItem('listData',JSON.stringify(listData))
    }
    return localStorage.getItem('listData')
}

let Mock ={
    '/list/data'(){
        console.log(saveData())
        return saveData()
    },

    '/change/data'(obj){
        let changeData = saveData();
        ++changeData[obj.id].count;
        localStorage.setItem('listData',changeData)
        
        return saveData()
    }
}

export default Mock