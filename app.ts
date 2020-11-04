import { url } from "inspector"

const fs = require('fs')
const http = require('http')

http.createServer((req,res) => {

    // switch (req.url){

    //     case 'value1': 
    //     break;

    //     case 'value1':
    //     break;

    //     case 'value1':
    //     break;

    //     case 'value1':    
    //     break;

    // }

    if (req.url === "/index.html" || req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(process.cwd()+'/some_folder/' + 'index.html', 'utf-8', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    }
    
    else {
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.write("404 Not Found\n")
        res.end()
    }

        
}).listen(3000) 