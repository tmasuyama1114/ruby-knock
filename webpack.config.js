const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

let entries = {}
glob.sync('./frontend/pages/**/*.js').map(function(file) {
    let name = file.split('/')[4].split('.')[0]
    entries[name] = file
})

module.exports = (env, argv) => {
    const IS_DEV = argv.mode === 'development'

    return {
        entry: entries,
        // devtool: IS_DEV ? 'source-map' : 'none',
        output: {
            filename: 'javascripts/[name]-[hash].js',
            path: path.resolve(__dirname, 'public/assets')
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: 'stylesheets/[name]-[hash].css'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new ManifestPlugin({
                writeToFileEmit: true
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        ie: 11
                                    },
                                    useBuiltIns: 'usage'
                                }
                            ]
                        ]
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.pug/,
                    loader: 'pug-plain-loader'
                },
                {
                    test: /\.(c|sc)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: path.resolve(__dirname, 'public/assets/stylesheets')
                            }
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                        outputPath: 'images',
                        publicPath: function(path) {
                            return 'images/' + path
                        }
                    }
                }
            ]
        },
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            },
            extensions: ['.js', '.scss', 'css', '.vue', '.jpg', '.png', '.gif', ' ']
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /.(c|sa)ss/,
                        name: 'style',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }
    }
}