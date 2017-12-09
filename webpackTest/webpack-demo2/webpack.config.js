var webpack=require("webpack")
var html=require("html-webpack-plugin")
module.exports={
    // __dirname是nodejs里的一个全局变量，它指向我们项目的根目录
    //入口文件
    entry:__dirname+"/static/main.js",
    output:{
        path:__dirname,
        filename:"public/index.js"
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            {
                test:/\.css/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/,     //屏蔽不处理的文件
                query:{
                    presets:['env']    //依赖包，也可添加react
                }
            }
        ],
    },
    plugins: [
        new webpack.BannerPlugin("by xiaozuo")  //BannerPlugin是webpack自带的方法
        // new html({
        //     template:__dirname+"/index.html"      //把index.js自动加入到定义的模板当中
        // })
    ],
    devServer:{
        contentBase:"public/index.js",   //本地服务所加载页面所在的目录
        inline:true,   //设置成自动刷新
        hot:true
    }
}