var path=require('path')

const p="/Users/macbookpro/nodeJs/renamedFile.txt"

console.log(path.basename(p))
console.log(path.dirname(p))
console.log(path.extname(p))
console.log(path.join('/Users','macbookpro','nodeJs','renamedFile.text'))
console.log(path.parse(p))