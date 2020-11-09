const http = require('http')
const fs = require('fs')
const path = require('path')

console.log(`Server is working on http://localhost:3000`)

http.createServer( (res,req) => {
    

    let fold = '.' + req.url;

    if (fold == './') 
        fold = './index.html'

    let ex = path.extname(fold)

    let cType = 'text/html'

    switch(ex){

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
    
    res.writeHead(200, { 'Content-Type': cType });


}).listen(3000);
