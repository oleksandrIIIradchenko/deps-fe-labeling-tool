import React from 'react'
import { Dropdown as AntdDropdown } from 'antd'
// import 'antd/es/dropdown/style/index.css'

const DropdownButton = (props) => (
  <AntdDropdown.Button { ...props } />
)

export {
  DropdownButton
}
