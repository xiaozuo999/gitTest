1. webpack命令环境安装
npm install webpack -g

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