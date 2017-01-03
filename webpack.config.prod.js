var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
//var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var InlineManifestPlugin = require("webpack-manifest-plugin");
var cssnext = require("postcss-cssnext");

module.exports = {
  devtool: "hidden-source-map",
  entry : {
    app: "./client/index.js",
    vendor: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "redux",
      "redux-thunk"
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.[name].[chunkhash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [ ".js", ".jsx", ".css" ],
    modules: [
      "client",
      "node_modules"
    ]
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader!postcss-loader"})
      },
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin({
      filename: "app.[chunkhash].css",
      allChunks: true
    }),
    new ManifestPlugin({
      basePath: "/"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [ "vendor", "manifest" ]
    }),
    new InlineManifestPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [
          cssnext({
            browsers: [ "last 2 versions", "IE > 10" ]
          })
        ]
      }
    })
  ]
}
