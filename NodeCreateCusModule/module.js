console.log("This is module.js");

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
    });
    return sum/arr.length;
}

//object
//module.exports=average;
module.exports={
    avg:average,
    name:'Abhinav',
    college:'pict',
}

module.exports.name="Sourabh";