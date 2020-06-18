// @ts-check
const reactPlugin = require('./node_modules/vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin]
}

module.exports = config
