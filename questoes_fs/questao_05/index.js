const fs = require('fs')

fs.rename('arquivo.txt', 'new_file.txt', (err)=>{
    if(err) throw(err)

    console.log("Nome do arquivo atualizado")
})