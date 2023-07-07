const fs = require('fs')

fs.unlink('wandinho.txt', (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log("Arquivo excluído")
})