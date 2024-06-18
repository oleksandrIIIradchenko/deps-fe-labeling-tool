import React from 'react'
import { Input as AntdInput } from 'antd'
import PropTypes from 'prop-types'
// import 'antd/es/input/style/index.css'
import { Element } from '@/utils/element'

const Input = ({ innerRef, ...rest }) => (
  <AntdInput {...rest} ref={innerRef} />
)

Input.TextArea = AntdInput.TextArea

Input.propTypes = {
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })
  ])
}

export { Input }
