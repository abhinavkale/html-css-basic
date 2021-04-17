//const average=require('./module.js');//only module
//console.log(average([3,5,7]));

const mod=require('./module');
/*mod={   eg like
    avg=average,
    name:'Abhinav',
    college:'pict',
}*/
console.log(mod.avg([3,5,7]));
console.log(mod.name);
console.log("This is index.js");
