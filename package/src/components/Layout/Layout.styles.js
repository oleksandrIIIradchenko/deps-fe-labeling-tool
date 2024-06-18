import { Layout as AntdLayout } from 'antd'
// import 'antd/es/layout/style/index.css'
import styled from 'styled-components'

const Layout = styled(AntdLayout)`
  ${({ height }) => `
    height: ${height / 10}rem;
  `}
`

export {
  Layout
}
