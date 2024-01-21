// Promises

// const fs = require("fs");

// function vishiReadFiles(){
//     console.log("inside vishiReadFiles");
//     return new Promise(function(resolve){
//         console.log("Inside Promise");
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             console.log("before resolve");
//             resolve(data);
//         });
//     });
// };

// function onDone(data){
//     console.log(data);;
// };

// var a = vishiReadFiles();
// a.then(onDone);

var d = new Promise(function(resolve){
    resolve();
});

console.log(d);