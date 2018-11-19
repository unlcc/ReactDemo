const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src', 'index.js'),
    output: {
        path: DIST_PATH,
        publicPath: "",
        chunkFilename: "main.js",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /\.(pbg|jpg|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './statc/img'
                        }
                    },
                    'image-webpack-loader'
                ]
            },
            {//字体图标
                test: /\.(eot|woff|woff2|ttf)$/i,
                // include: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 30000,
                        outputPath: './static/font/'//图片输出位置
                    }
                }
            },
            {//数据
                test: [/\.json$/i],//i不区分大小写
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './static/data/'//图片输出位置
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: require.resolve('css-loader'),
                    },
                ]
            },
            {
                test: /\.s[a|c]ss$/,
                loader: ['css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new copyWebpackPlugin([{//复制static到dist
            from: path.resolve(__dirname, '..') + '/src/static',//打包的静态资源目录地址
            to: './static' //打包到dist下面的static
        }]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html'),//模板
            filename: 'index.html',
            inject: false, //允许插件修改哪些内容，包括head与body
            hash: true, //是否添加hash值
            minify: { //压缩HTML文件
                removeComments: true,//移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            },
            chunksSortMode: 'none' //如果使用webpack4将该配置项设置为'none'
        }),
    ]
}