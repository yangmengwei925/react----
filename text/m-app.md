### 项目创建
1.  创建项目 create-react-app 项目名称
2.  释放 npm run eject
3.  安装 npm i react-router-dom -S
4.  安装 npm i antd -S 
5.  安装 npm i babel-plugin-import -S
6.  配置一下 实现antd按需加载
### 项目目录相关
7.  清空 src
8.  创建 index.js
9.  创建 component 及app.js
10. 创建 static 存放静态图片及文件
11. 创建 mock   文件夹 用来存放数据及模拟接口
11. 创建 until  文件夹 用来存放封装数据请求公共的方法
12. 创建 router 文件夹 用来存放根路由组件
13. 创建 store  文件夹 用来存放公共数据（redux）
### 移动端项目思路
1.创建一个Home组件及Login组件
2.创建根路由组件,并引入app.js 通过根路由实现Home到Login的互相切换
3.书写Login组件 实现登录功能 
   涉及到的功能点：（1）受控组件拿到用户输入的名称及密码
                （2）点击登录 请求登录接口 
                    （a）mock数据模拟一个登录数据 login.json  
                    （b）mock模拟一个登录接口 接口接收登录传过来的用户信息 验证login.json里是否存在该用户 存在则返回true 不存在返回false
                    （c）登录页进行数据请求 根据结果进行跳转 true跳转到Home页 false 跳转至注册页（或判断按钮的显示隐藏）
                    （d）mock模拟一个注册接口 接口接收注册传过来的用户信息 并push进login.json 返回一个true 
                    （e）注册成功 跳回登录页（或判断按钮的显示隐藏）进行登录
                （3）登陆成功需要携带用户的登录名称进入Home （使用本地存储先存后取）
4.书写Home组件
    （1）配置一个二级路由 实现 首页 订单 发现 我的 互相跳转
    （2）
  
