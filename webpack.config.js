const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    devServer:{
        port:3000,
        progress:true,          //打包是否显示进度
        contentBase:'./dist',   //以哪个目录
        compress:true,          //压缩
    },
    mode:'development',         //模式 production, development
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    plugins:[  //数组类型
        new HtmlWebpackPlugin({
            template:"./src/index.html",    //模板位置
            filename:"index.html",       //打包后的模板名字
            minify:{                    //模板压缩
                removeAttributeQuotes:true, //清除双引号
                collapseWhitespace:true,    //压缩成一行
            },
            hash:true,                  //hash 戳 清除缓存用
        })
    ],
	module:{	//模块
		rules:[	//规则
			{test:/\.css$/,use:[
                {
                    loader:'style-loader'
                },
                'css-loader'
            ]}
		]
	}
}