const fs = require('fs')

fs.readFile('index.txt','utf8', function (err, res){
    if (err){
        console.log(err)
        return
    }
    console.log(res)
})
