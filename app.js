const http = require('http')
const fs = require('fs')
http.createServer( (req,res) => {
    
    console.log("Server is running on localhost:3000")
    fs.readFile('./some_folder/text.txt', 'utf-8',(err,data)=>{
        if (err) throw err;
        res.end(data);
    })

    

}).listen(3000)