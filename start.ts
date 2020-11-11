const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req,res) => { 

   
    if (req.url === '/') req.url = '/index.html'
    
    let eName = path.extname(req.url)
    let cType = 'text/html' 

    switch(eName){
        case '.html':
            cType = 'text/html';
        break;
        case '.css':
            cType = 'text/css';
        break;
        case '.png':
            cType = 'text/png';
        break;
        case '.jpg':
            cType = 'text/jpg';
        break;     
        default: 
            cType = 'text/plain';
        break; 
    }

    fs.readFile(process.cwd() + req.url, 'utf-8', (err, data) => {

        if (err) {
            fs.readFile(process.cwd()+'/public/404.html', (error, content) => {
                if (error) throw error
                res.writeHead(404, { 'Content-Type': cType });
                res.end(content, 'utf-8');
            });
        }    
        
        else {
            res.writeHead(200, {'Content-Type': cType})
            res.end(data, 'utf-8')
        }
        
    })


}).listen(3000);
