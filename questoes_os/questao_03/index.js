const os = require('os')

let byte = os.freemem()
let kb = byte /1024
let mb = kb/1024
let gb = mb / 1024

kb = Math.floor(kb)
mb = Math.floor(mb)
gb = Math.floor(gb)

console.log(`Byte: ${byte} b; Kilobytes: ${kb} kb; Megabytes: ${mb} mb; Gigabytes: ${gb} gb`)