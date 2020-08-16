module.exports = function(context, options) {
  return {
    name: "loaders",
    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [
            {
              test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "fonts/"
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
}
