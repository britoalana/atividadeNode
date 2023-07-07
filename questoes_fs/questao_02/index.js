const fs = require('fs')

fs.writeFile('index.txt', 'Bruno Berti', function(err){
    if(err) throw(err)

    console.log("Arquivo salvo")
})