1. webpack命令环境安装
npm install webpack -g   //全局安装
webpack -v   //查看webpack是否安装成功

2.package.json 工程文件（需要依赖的模块，库描述，版本，作者..）
npm init  // 自动生成package.json 文件

3.安装本地webpack
npm install webpack -D

4.webpack作用
打包文件，模块化
-----------------------------
webpack小demo
    index.html 页面
    entry.js  入口文件
项目目录下进行；
    wepack <现在的>  <编译后的>
    webpack entry.js  bundle.js
-------------------------
    自动解决依赖
    默认支持commonJs规范
-----------------------
 webpack默认只支持js文件
    loader类似的转化器（coffeScript）
        css的转化器
 CSS文件：
   style-loader
   css-loader
   通过npm 安装
   npm install style-loader css-loader -D

css直接引入到 js文件中，再打包；
注意：在webpack中，多个loader加载
    ? -> 连接多个loader
-----------------------------
配置出口/入口谁的
配置文件  webpack.config.js
    作用：出口，入口，loader

   ```
   module.exports={
       entry:'./entry.js',  //入口文件
       output:{
           filename:'bundle.js'  //出口
       }
   }
   ```

   设置好这个文件后：
   在命令行中 直接输入
   webpack   //就可以打包了；
   webpack -p    //生成环境下用，会压缩文件；
   webpack -w   //自动监测文件，自动打包
   webpack -d  //重成 source maps (用来调试)


