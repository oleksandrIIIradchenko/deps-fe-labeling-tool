import { api } from './api'
import { documentForLabeling } from './document'
import { events } from './events'
import { markup } from './markup'
import { fields } from './model'
import { ocr } from './ocr'
import { settings } from './settings'
import { SHIM_CONFIG } from 'labeling-tool'

SHIM_CONFIG.setConfig(
  documentForLabeling,
  fields,
  ocr,
  api,
  markup,
  settings,
  events
)

export {
  SHIM_CONFIG
}
