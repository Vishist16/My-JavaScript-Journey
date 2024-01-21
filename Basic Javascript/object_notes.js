// Object Mehtods explained


function objectMethods(obj){
    console.log("Original obbject: ", obj);

    let keys = Object.keys(obj);
    console.log("After Object.keys(): ", keys);

    let values = Object.values(obj);
    console.log("After Object.values(): ", values);

    let entries = Object.entries(obj);
    console.log("After Object.entries(): ", entries);

    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty: ", hasProp);

    let newObj = Object.assign({}, obj, {newProperty: "newValue"});
    console.log("After Object.assign(): ", newObj);
};


const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};
//console.log(sampleObject);

objectMethods(sampleObject);
//let newO = Object.assign({}, sampleObject, {newProperty: "newValue"});
//console.log(newO);
console.log(sampleObject.hasOwnProperty("key1")); // to check if sampleObject has a property by name key1 - true
console.log(sampleObject.hasOwnProperty("name")); // to check if sampleObject has a property by name - false
