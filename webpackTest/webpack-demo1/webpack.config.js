module.exports={
    // __dirname是nodejs里的一个全局变量，它指向我们项目的根目录
    //入口文件
    entry:__dirname+"/static/js/main.js",
    output:{
        path:__dirname+"/view",
        filename:"webpack.js"
    },
    module:{
        loader:[
            {
                test:/\.css$/,
                loader:"style!css"
            }
        ]
    }
}