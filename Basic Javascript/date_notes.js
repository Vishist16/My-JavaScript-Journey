// Date is a premade class that we can use out of the box, i.e. its a inbuilt class
// Date is used to get things done related to system time/date

// eg.
const currentDate = new Date(); // here we initialized an object for Date class
console.log("Current Month: " + currentDate.getMonth()+1); // we are doing +1 because it starts form 0 index, so jan will be 0 so +1 will give correct ans

console.log("Current Date: " + currentDate.getDate());
console.log("Current Year: " + currentDate.getFullYear());
const a = currentDate.getHours()>12 ? currentDate.getHours()-12+"pm" : currentDate.getHours()+"am";
console.log("Current Hour: " + a);
console.log("Current mins: " + currentDate.getMinutes() + "mins");

console.log("Time in milliseconds since 1970: ", currentDate.getTime());

// calculating time it took to execute a code
function game(){
    let a = 0;
    for(let i=0; i<100000000; i++){
        a +=1;
    }
    return a;
};
function sum(a,b){
    return a+b;
};
const beforeDate = new Date();
const timeBefore = beforeDate.getTime();
sum(5,7);
const afterDate = new Date();
const timeAfter = afterDate.getTime();
console.log(timeAfter-timeBefore); // in milliseconds