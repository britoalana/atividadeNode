const fs = require('fs')


fs.copyFile('wandinho.txt', 'copia.txt', (err) =>{
    if(err){
        console.log(err)
    } else{
        console.log('Copiado')
    }
})