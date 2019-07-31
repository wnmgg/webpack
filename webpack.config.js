const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");       //把在style里的样式抽离成一个对立文件
const OptimizeCss = require("optimize-css-assets-webpack-plugin");      //优化css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");  //优化js
module.exports = {
    optimization:{      //优化项
        minimizer:[
            new UglifyJsPlugin(),
            new OptimizeCss()
        ]
    },
    devServer:{
        port:3000,
        progress:true,          //打包是否显示进度
        contentBase:'./dist',   //以哪个目录
        compress:true,          //压缩
    },
    mode:'production',         //模式 production, development
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
                //removeAttributeQuotes:true, //清除双引号
                //collapseWhitespace:true,    //压缩成一行
            },
            hash:true,                  //hash 戳 清除缓存用
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
	module:{	//模块
		rules:[	//规则
			{test:/\.css$/,use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
            ]},
            {test:/\.less$/,use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader']
            }
		]
	}
}