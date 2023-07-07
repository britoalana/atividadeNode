const os = require('os')

console.log(os.networkInterfaces())
console.log(`Diretórios temporário: ${os.tmpdir()}`)

let tempSec = os.uptime()
let tempMin = tempSec / 60
let tempHoras = tempMin / 60


tempSec = Math.floor(tempSec)
tempMin = Math.floor(tempMin)
tempHoras = Math.floor(tempHoras)

tempHoras = tempHoras % 60
tempMin = tempMin % 60
tempSec = tempSec % 60 

console.log(`Tempo de uso ${tempHoras}:${tempMin}:${tempSec}`)