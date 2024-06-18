import FileSaver from 'file-saver'
import { globalsVar } from '@/utils/global-variable'

const saveToFile = (filename, encoding, content) => {
  FileSaver.saveAs(
    new File([content], filename, { type: encoding })
  )
}

const readFile = (accept) => new Promise((resolve, reject) => {
  const i = globalsVar.document.createElement('input')
  i.type = 'file'
  i.style = 'display: none'
  i.accept = accept || ''
  i.onchange = (e) => {
    const file = e.target.files[0]
    const r = new FileReader()
    r.readAsText(file, 'UTF-8')
    r.onload = (re) => {
      resolve(re.target.result)
    }
  }
  i.click()
})

export {
  saveToFile,
  readFile
}
