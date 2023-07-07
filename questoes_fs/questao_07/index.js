const fs = require('fs')

const file = './arquivo.txt'

if (fs.existsSync(file)){
    console.log('Arquivo Existente')
} else{
    console.log('Arquivo Inexistente')
}