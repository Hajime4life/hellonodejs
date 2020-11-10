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
    

    fs.readFile(process.cwd() + fold, 'utf-8', (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(process.cwd()+'/public/404.html', (err, data) => {
                    res.writeHead(200, { 'Content-Type': cType });
                    res.end(data, 'utf-8');
                });
            }   else {
                res.writeHead(500)
                res.write(`Sorry that's some server error!`)
                res.end()
            }
        }

        res.writeHead(200, { 'Content-Type': cType });
        res.end();
    })

    


}).listen(3000);
