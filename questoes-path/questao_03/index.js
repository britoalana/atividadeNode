const path = require('path')

const pasta = '/usr/local'
const arquivo = 'bin/weargreen.txt'

const diretorio = path.join(pasta, arquivo)
console.log(diretorio)