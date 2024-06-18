import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { globalsVar } from '@/utils/global-variable'

class DocumentListener extends PureComponent {
  static propTypes = {
    onContextMenu: PropTypes.func
  }

  componentDidMount = () => {
    globalsVar.document.addEventListener('contextmenu', this.props.onContextMenu)
  }

  componentWillUnmount = () => {
    globalsVar.document.removeEventListener('contextmenu', this.props.onContextMenu)
  }

  render = () => null
}

export {
  DocumentListener
}
