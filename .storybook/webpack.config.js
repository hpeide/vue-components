const path = require('path')

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.sass$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          indentedSyntax: true,
          sourceMap: false
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  // Return the altered config
  return config
}
