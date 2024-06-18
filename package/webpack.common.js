const path = require('path')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const themeVariables = require('./src/antd/antd-theme')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const nodeExternals = require('webpack-node-externals');

const cssLoaders = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: ''
    }
  },
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1
    }
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        plugins: [
          'postcss-preset-env',
          'postcss-flexbugs-fixes'
        ]
      }
    }
  }
]

const paths = {
  app: '.',
  src: './src',
  dist: './lib',
  entry: './src/index.js'
}

module.exports = {
  entry: path.resolve(__dirname, paths.entry),
  output: {
    globalObject: 'this',
    library: 'labeling_tool',
    libraryTarget: "umd",
    path: path.resolve(__dirname, paths.dist),
    publicPath: ''
  },
  resolve: {
    modules: [
      path.resolve(__dirname, paths.src),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, paths.src),
      '~': path.resolve(__dirname, paths.app)
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     ...cssLoaders,
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         lessOptions: {
      //           javascriptEnabled: true,
      //           modifyVars: themeVariables
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false
                      }
                    }
                  }
                ]
              }
            }
          }],
        issuer: /\.(js|ts)x?$/
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline'
      },
      {
        exclude: [/\.(m|e)?js(x?)$/, /\.(c|le)ss$/, /\.html$/, /\.svg$/i, /\.(woff(2)?|eot|ttf|otf|)$/],
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // include specific files based on a RegExp
      include: /scr/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new AntdDayjsWebpackPlugin({
      replaceMoment: true,
      plugins: require('./src/antd/dayjs-plugins')
    }),
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    })
  ],
  externals: [nodeExternals()]
}
