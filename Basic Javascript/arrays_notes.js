const arr = [1,2,3,4];
arr.push(10);
console.log("Updated arr after push: "+arr);
arr.pop(4);
console.log("Updated arr after pop: "+arr);
arr.shift();
console.log("Updated arr after removing first ele: "+arr);
arr.unshift(11);
console.log("Updated arr after adding an element at beginning: "+arr);

// concat array in javascript
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const newarr = arr1.concat(arr2);
console.log("Array after concatination: "+ newarr);


// for each in javascript to access array elements

const initialArray = [1,2,3,4,5];
function logThing(str){
    console.log(str);
};
initialArray.forEach(logThing);

/// map, filter, find, sort