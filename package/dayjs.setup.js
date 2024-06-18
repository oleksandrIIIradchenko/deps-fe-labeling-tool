
import dayjs from 'dayjs'
import dayjsPlugins from './src/antd/dayjs-plugins'

dayjsPlugins.forEach((pluginName) => {
  const plugin = require(`dayjs/plugin/${pluginName}`)
  dayjs.extend(plugin)
})
