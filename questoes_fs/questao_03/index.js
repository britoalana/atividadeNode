const fs = require('fs')

fs.appendFile('wandinho.txt', 'Morticia Addams', function(err){
    if(err) throw(err)
    console.log("Atualizado")
})