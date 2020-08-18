const path = require('path');
// 模組引入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        // __dirname 為 nodejs 的一個全域參數，為當前此檔案的絕對路徑
        // path.resolve 是為了取得所指定的檔案 / 資料夾之絕對路徑
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        // publicPath: "./", //輸出時指定目錄
    },
    devServer: {
        port: 9000,//用來設定本地伺服器的端口，預設為 8080        
        open: false,//伺服器啟動後是否自動打開瀏覽器，預設為 false
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: './dist',
        disableHostCheck: true,
        //告訴服務器從哪個目錄中提供內容。只用在你想要提供靜態文件時才需要。,
        host:'0.0.0.0'
    },
    devtool: 'eval-source-map',//有很多模式 能夠幫助你每個模塊使用 eval() 執行，並且 SourceMap 轉換為 DataUrl 後添加到 eval() 中。初始化 SourceMap 時比較慢，但是會在重構建時提供很快的速度，並且生成實際的文件。行數能夠正確映射，因為會映射到原始代碼中。
    module: {
        // rules 允許你一次使用多個loader,並且順序是從下到上 sass->css->style
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,// 遇到.scss結尾的檔案
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    //style-loader -> 處理下面結果
                    // { loader: 'style-loader' },
                    // css-loader -> 將 css 編譯成js可讀的物件
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    },
                    // sass-loader -> 將 scss 編譯成 css
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
        // // // 創建實例 (第二步)
        new HtmlWebpackPlugin({
            // 配置 HTML 模板路徑與生成名稱 (第三步)
            template: './src/index.html',
            filename: 'index.html',
        }),
    ]
};