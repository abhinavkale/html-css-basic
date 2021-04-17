const fs=require("fs");//file system(read and write)
let text=fs.readFileSync("abc.txt","utf-8");
text=text.replace("abhinav","sourabh");

//content of file
console.log(text);

//creating new file
fs.writeFileSync("xyz.txt",text);//create