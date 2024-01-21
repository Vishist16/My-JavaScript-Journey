function getLength(str){
    console.log("Original str: " + str);
    console.log("Length: "+ str.length);
};

getLength("Hello World");

function findindexOf(input, target){
    console.log("Orginal String: "+ input);
    console.log("index: "+ input.indexOf(target)); // will return the starting index
    console.log("index: "+ input.lastIndexOf(target)); // will return the last occurence's index
};

findindexOf("Hello World World World", "World");

function getSlice(str, start, end){
    console.log("After Slice: " + str.slice(start, end));
};

getSlice("Hello World", 0, 5);

function replaceString(str, target, replacement){
    console.log("Original Strnig: "+ str);
    console.log("After replace: "+ str.replace(target, replacement));
};
replaceString("Hello World", "World", "Javascript");

function splitString(str, seperator){
    console.log("Original String: "+ str);
    console.log("Splitted str: " + str.split(seperator));
};

const value = "Hello WOrld";
console.log(value.split(" "));
splitString("Hello World"," ");

const val2 = "    Hello World      ";
console.log(val2.trim());
console.log(value.toUpperCase());
console.log(value.toLowerCase());