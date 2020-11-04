import {createServer} from 'http'
const fs = require('fs')

createServer((req,res) => {
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
    
    
    // fs.readFile('./index.html', 'utf-8', (err, data) => {
    //     if (err) throw err;
    //     res.end(data);
    // })
    
    if (req.url === "/index.html" || req.url === "/") {
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    }
}).listen(3000)
