const os = require('os')

console.log(`Nome: ${os.type()}`)
console.log(`Versão: ${os.release()}`)
console.log(`Plataforma: ${os.platform()}`)
