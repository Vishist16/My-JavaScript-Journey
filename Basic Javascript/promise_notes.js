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
    setTimeout(function(){
        resolve("data");
    },1000);
});
function callBack(d){
    console.log(d);
};
// console.log(d);
// d.then(callBack);

function vishistsAsyncfunc(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("New hi");
        },3000);
    });
    return p;
};

// const value = vishistsAsyncfunc();
// value.then(function(){
//     console.log("hi there");
// })
async function main(){
    // no callbacks and no .then syntax used
    // await is only valid in a async function and can't be used without a async func
    let value = await vishistsAsyncfunc(); // as it will take 3 seconds // await is very imp, as it returns resolved val, else if not used will give promise
    console.log("New hi 1"); // this will only be printed after the await reads value, then only the thread will move to execute the next value
    console.log(value);
}
main();
console.log("After Main"); // this line will be printed before main() func