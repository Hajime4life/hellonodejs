const fs = require('fs')
fs.readdir(`./some_folder`, (err, file) => {
    file.forEach(file=> {
        console.log(file)
    })
})
