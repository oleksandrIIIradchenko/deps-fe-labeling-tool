import React from 'react'
import { Divider as AntdDivider } from 'antd'
// import 'antd/es/divider/style/index.css'

const DividerOrientation = {
  LEFT: 'left',
  RIGHT: 'right'
}

const Divider = (props) => <AntdDivider {...props} />

export {
  DividerOrientation,
  Divider
}
