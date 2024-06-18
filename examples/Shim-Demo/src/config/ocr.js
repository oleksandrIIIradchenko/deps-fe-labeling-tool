import { KnownLanguage, OcrEngine, OcrLanguage } from 'labeling-tool'

const ocrLanguages = [
  new OcrLanguage(KnownLanguage.ENGLISH, 'English'),
  new OcrLanguage(KnownLanguage.RUSSIAN, 'Russian')
]

const ocrEngines = [
  new OcrEngine('TESSERACT', 'Tesseract'),
  new OcrEngine('ABBYY', 'Abbyy'),
  new OcrEngine('GCP_VISION', 'GCP Vision')
]

const ocr = {
  engines: ocrEngines,
  languages: ocrLanguages
}
export {
  ocr
}
