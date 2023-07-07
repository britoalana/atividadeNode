const os = require('os')

console.log(`Nome do usuário: ${os.userInfo().username}`)
console.log(`Diretório: ${os.homedir()}`)
