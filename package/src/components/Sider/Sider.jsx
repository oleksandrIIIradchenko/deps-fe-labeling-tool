import React from 'react'
import { Layout } from 'antd'
// import 'antd/es/layout/style/index.css'

const ANTD_LIGHT_THEME = 'light'

const Sider = (props) => (
  <Layout.Sider {...props} theme={ANTD_LIGHT_THEME} />
)

export {
  Sider
}
