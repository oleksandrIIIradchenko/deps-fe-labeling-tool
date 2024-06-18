import { Select as AntdSelect } from 'antd'
// import 'antd/es/select/style/index.css'
import styled, { css } from 'styled-components'

const Select = styled(AntdSelect)`
  width: 100%;

  ${(props) => props.mode && css`
    .ant-select-selection-overflow-item {
      margin-right: 0.5rem;
    }

    .ant-select-selection-item {
      padding: 0 0.2rem;
    }
`}
`

export {
  Select
}
