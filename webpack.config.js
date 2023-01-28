const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PostcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const PostcssPresetEnv = require('postcss-preset-env')
const PostcssNormalize = require('postcss-normalize')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

const getStyleLoaders = (importLoaders) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      sourceMap: isDev,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          PostcssFlexbugsFixes(),
          PostcssPresetEnv({
            autoprefixer: {
              grid: true,
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
          PostcssNormalize(),
        ],
      },
      sourceMap: isDev,
    },
  },
]

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: `[name]${isDev ? '' : '.[hash:8]'}.js`,
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    compress: true,
  },
  devtool: isDev ? 'inline-source-map' : '',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: !isDev,
      cache: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(1),
      },
      {
        test: /\.less$/,
        use: [
          ...getStyleLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          ...getStyleLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(svg|png|gif|jpe?g|woff2?|ttf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
        },
      }),
    ],
  },
  resolve: {
    alias: {
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
  },
}
