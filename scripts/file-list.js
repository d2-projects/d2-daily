const { resolve } = require("path")
const { existsSync, lstatSync, readdirSync } = require("fs")

function fileList(year = '2018', month = '10') {
  const fileList = []
  const dirPath = resolve(`./site/post/${year}/${month}/`)
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory()
  if (!isDir) {
    return fileList
  }
  const files = readdirSync(dirPath)
  files.forEach((item) => {
    if (/.md$/.test(item)) {
      const currentFile = item.slice(0, 2)
      fileList.push(`/post/${year}/${month}/${currentFile}`)
    }
  })
  return fileList.reverse()
}

module.exports = fileList