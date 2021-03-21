const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        // TODO 1
        // READ AND SEND DATA IN index.html
        fs.readFile('index.html', 'utf-8', (err, data)=>{
            res.end(data)
        })
    }else if(req.url === "/names"){
        // TODO 2
        // READ AND SEND DATA IN names.json
        fs.readFile('./names.json', 'utf-8', (err, data)=> {
            let mydata = JSON.parse(data);
            res.end(JSON.stringify({status: 0, msg: 'data is ready', data: mydata}))
        })
    }else{
        res.end("404")
    }
})

server.listen(3000, () => {
    console.log("Your application is listening on port 3000");
})