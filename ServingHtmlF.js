const http=require('http');
const fs=require('fs');
const fileContent=fs.readFileSync('CSSTransitions.html');

const server=http.createServer((req,res)=>{
                //respond code
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
});

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
});
//if not 80 then write explicitly in url back 