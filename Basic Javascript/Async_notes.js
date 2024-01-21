// Async, Await and Promises

// Async 
// Common inbuilt async functions: setTimeout, fs.readFile, Fetch

const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
});
let a = 0;
for(let i=0; i<1000000000; i++){
    a=a+1;
}; // here as it takes a long time, although our file is read by time this thread executes, still it will only be printed after this
console.log("Hi"); // here first hi will be printed then the above file, as readFile is asynchronous and takes time to read

