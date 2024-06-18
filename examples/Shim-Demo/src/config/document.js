import { pages } from '../assets/document'
import { KnownLanguage, Document } from 'labeling-tool'

const documentForLabeling = new Document(
  pages,
  KnownLanguage.ENGLISH,
  'Demo',
  'Tesseract'
)

export {
  documentForLabeling
}
