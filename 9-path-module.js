// Path Built in modules

const path = require('path')
const { text } = require('stream/consumers')
console.log(path.sep) // shows up the ternimal wiht a '/'

const filePath=path.join('/content','text.txt')
console.log(filePath) // accessing file loction in a path

const base=path.basename(filePath)
console.log(base) // accessing base file name 

const absolute =path.resolve(__dirname,'content','text.txt')
console.log(absolute)