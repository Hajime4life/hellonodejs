const fs = require('fs')
const http = require('http')
let cssFile



http.createServer((req,res) => {

    switch(req.url){

        case '/style.css':
            res.writeHead(200, {"Content-Type": "text/css"})
            fs.readFile(process.cwd()+'/some_folder/' + 'style.css', 'utf-8', (err, data) => {
                if (err) throw err
                res.end(data)
            }); break;  

        case '/' :
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile(process.cwd()+'/some_folder/' + 'index.html', 'utf-8', (err, data) => {
                if (err) throw err
                res.end(data);
            });   break;

        case '/some_page.html': 
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile(process.cwd() + '/some_folder/some_page.html', 'utf-8', (err,data) => {
                if (err) throw err
                res.end(data)
            })

        default: 
            res.writeHead(404, {"Content-Type": "text/html"})
            fs.readFile(process.cwd()+'/some_folder/' + '404.html', 'utf-8', (err,data) => {
                if (err) throw err
                res.end(data)
                
            }) ;    break;
    }

    

}).listen(3000) 