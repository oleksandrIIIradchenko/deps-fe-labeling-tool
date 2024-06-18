import React from 'react'
import { Tabs as AntdTabs } from 'antd'
// import 'antd/es/tabs/style/index.css'
import PropTypes from 'prop-types'

const { TabPane } = AntdTabs

const TabsSize = {
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large'
}
const Tabs = (props) => (
  <AntdTabs {...props} />
)

Tabs.TabPane = TabPane

Tabs.propTypes = {
  size: PropTypes.oneOf(Object.values(TabsSize))
}

export {
  Tabs,
  TabsSize
}
