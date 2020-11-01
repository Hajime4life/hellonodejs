const http = require('http')
const fs = require('fs')
http.createServer((req,res) => {

    // fs.readFile('./some_folder/text.txt', 'utf-8',(err,data)=>{
    //     if (err) throw err;
    //     res.end(data);
    // })

    // fs.readFile('./some_folder/json.json','utf-8', (err, data) => {
    //     if (err) throw err;
    //   res.end(data)
    // })
    
    // fs.readdir('./some_images', (err,files)=>{
    //     if (err) throw err;
    //     res.end(files)
    // })

}).listen(3000)
