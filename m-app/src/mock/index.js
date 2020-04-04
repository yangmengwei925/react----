import loginData from './login.json'
import navData from './navlist.json'
import contentData from './content.json'

let Mock ={
    '/login/login':function(obj){
        //登录接口
        //接收前端传来的登录数据 跟数据库 login.json 作比对 存在这个用户信心息 
        let isLogin = loginData.some(item=>item.username===obj.username&&item.password===obj.password)
        if(isLogin) return true
        //不存在 就告诉用户
        return false
    },
    '/login/ver':function(obj){//用户注册接口

        loginData.push(obj)//增加用户数据
        return true
    },
    '/nav/list':function(){ //导航数据
        return navData
    },
    '/content/list':function(obj){//列表数据
        if(obj.city!==undefined){
            return contentData.filter(item=>item.city===obj.city)
        }
        return contentData
    }

}
export default Mock