const fs = require('fs')
const path = require('path')

const files = fs.readdirSync('./')

const jsFiles = files.filter(f=> /\.(js)$/g.test(f)).sort((a,b)=> a.replace(/[^0-9]/ig,"") - b.replace(/[^0-9]/ig,""))

const outPutFile = 'README.md'

fs.writeFileSync(outPutFile, '')

let writeText = '## 自动生成readme.md文件  \r\n* npm run create\r\n## 前置知识\r\n* [info.md](./info.md) \r\n'

jsFiles.forEach((file)=>{
  const text = fs.readFileSync(path.join(__dirname,'../', file),'utf-8')
  const texts = text.match(/(\/\/.*)|(\/\*[\s\S]*?\*\/)/g)
  writeText += '\r\n\r\n\r\n'
  writeText += `### [${file}](./${file})\r\n`
  if(text) writeText += texts.join('  \r\n').replace(/\/\//g, '*')
})

fs.writeFileSync(outPutFile, writeText)