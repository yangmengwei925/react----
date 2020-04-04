### 1.安装全局           
  npm i create-react-app -g
### 2.创建项目           
  create-react-app 项目名称
### 3.释放package.json  
  npm run eject
    
### 4.antd安装 
  npm i antd -S
  
  npm i babel-plugin-import -S
```js
配置一下package.json
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" 
      }]
    ]
  }

import {Icon}  from 'antd'
```

### 5.动画库 
  npm i animate.css -S

```js
  import 'animate.css/animate.min.css'
  所有需要用动画的组件 先写一个animate 
```

### 6.安装路由 
  npm i react-router-dom -S
