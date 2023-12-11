const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const mode = process.env.NODE_ENV || "production"

module.exports = {
  mode,
  entry: "./src/index.tsx",
  devtool: mode == "development" && "inline-source-map",
  optimization: {
    usedExports: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module.css$/,
        use: [
          'style-loader', // 'style-loader
          {
            loader: "css-loader",
            options: {
              esModule: true,
              importLoaders: 1,
              modules: {
                auto: true,
                mode: "local",
                exportGlobals: false,
                localIdentName: '[hash:base64]',
                localIdentRegExp: undefined,
                namedExport: false,
                exportLocalsConvention: 'asIs',
                exportOnlyLocals: false,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-mantine', {}
                  ]
                ]
              }
            }
          }
        ],
      },
      {
        test: /styles.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-mantine', {}
                ]
              ]
            }
          }
        }], // 'style-loader
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
    <html>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `,
    }),
  ],
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
}
