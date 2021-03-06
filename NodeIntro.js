//console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello Abhinav');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>CSS Tranisitions</title>
  </head>
  <style>
      #box{
          display:flex;
          justify-content: center;
          align-items: center;
          background-color: aqua;
          width:200px;
          height: 200px;
          transition-property: background-color;
          transition-duration: 1s;
          transition-timing-function: ease-in-out;
          /* transition-delay:1s ; */
          /* transition:background-color 1s ease-in 0.3s; */
          transition:all 1s ease-in-out 0.1s;
          cursor:pointer;
      }
      #box:hover{
          background-color:darkgreen;
          height: 400px;
          width:300px;
          border-radius: 30px;
          font-size:66px;
      }
  </style>
  <body>
      <h1>This is CSS Transitions</h1>
      <div class="container">
          <div id="box">
              This is my Box
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});