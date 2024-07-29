import { join } from 'node:path'

/**
 * @type {Configuration}
 */
export default {
  context: join(import.meta.dirname, 'src'),
  devtool: 'source-map',
  entry: {
    application: {
      import: [
        './application.js',
        './application.scss'
      ]
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        type: 'asset/resource',
        generator: {
          binary: false,
          filename: '[name].css[query]'
        },
        use: [
          {
            loader: 'sass-loader',
            options: {
              // api: 'legacy', // ✅
              // api: 'modern', // ❌
              // api: 'modern-compiler', // ❌
              sassOptions: {
                quietDeps: true,
                style: 'expanded'
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: join(import.meta.dirname, 'dist')
  },
}

/**
 * @import { Configuration } from 'webpack'
 */
