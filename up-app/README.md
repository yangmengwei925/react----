安装 npm i creact-react-app -g


创建一个应用 creact-react-app meituan-app
释放文件 npm run eject
安装 npm i react-router-dom -S
安装 npm i redux redux-thunk react-redux -S

安装 npm i antd -S
安装 npm i babel-plugin-import -S
修改 package.json


   "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ] 


