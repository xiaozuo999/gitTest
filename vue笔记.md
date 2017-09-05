#vue笔记

## vue router的安装

```
npm installj vue-router@0.7.13 --save
```
## vue-cli 架手脚的使用（提供一个基本的项目结构）
    1.初始化
    本身集成很多项目模板
        simple
        webpack （包含Eslint检查代码规范，单元测试）
        webpack-simple
            vue init webpack-simple vue-webpack-demo   //安装最新版本
            vue init webpack-simple#1.0 vue-webpack-demo  //安装指定版本的

        检查是否成功：
            使用：
            1.npm install vue-cli -g   //安装vue命令环境
            验证是否成功：  vue --version

    2. 安装依赖启动：
        npm install   //要下载大量依赖，替换cnpm快一点
    3. 启动项目
        npm run dev
        browserify
        broserify-simple

## vue loader的使用
    配合vue-Router使用
    1.【下载】vue-router
        npm install vue-router@0.7.13
    2.【引入】vue-router到js模块中
        import VueRouter from 'vue-router'
    3.在js文件中【使用】
        vue.use(VueRouter);
    4. 【配置】路由

## npm 安装模块要注意的事：
    npm install <package-name> --save-dev   //安装完后再把依赖，保存到项目中

## webpack使用
    npm run dev   //测试启动
    npm build dev //打包成静态的

## vue-rouder路由的使用
    1. 下载vue-router模块
           npm install vue-router#0.7.13
    2. 查看是否安装成功



