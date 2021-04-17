//Synchronous or blocking=line by line execution
//Asynchronous or non-blocking=callblacks will fire(line by line execution not guarenteed)

//eg callback
const fs=require("fs");//file system(read and write)
let text=fs.readFile("abc.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log(text);
console.log("This is a message");