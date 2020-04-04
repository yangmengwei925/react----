import LoginData from './login.json'
import ListData from './list.json'
import contentList from './content.json'
const Mock ={
    '/login/login':function(obj){
        let islogin = LoginData.some(item=>item.username===obj.username)
        if(islogin) return '账户已注册'
        LoginData.push(obj)
        return '注册成功'
    },
    '/login/check':function(obj){
        let ischeck = LoginData.some(item=>item.username === obj.username&&item.password === obj.password)
        if(ischeck) return true
        return false
    },
    '/alibb/list/':function(){
        return ListData
    },
    '/content/list':function(obj){

        if(obj.id !==undefined){
            return contentList[obj.id]
        }
        return contentList
    }
}

export default Mock

