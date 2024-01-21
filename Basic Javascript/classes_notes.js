
// class is like a bluprint, once created we dont need to create again and again like with functions
class Animal{
    constructor(name, legCount){
        this.name = name; // name is an attribute
        this.legCount = legCount; // leg count is also a attribute
    };
    describe(){
        return `${this.name} has ${this.legCount} legs`;
    };
    consoleLogging(){
        console.log(this.name + " has " + this.legCount + " legs.");
    };
    static myType(){ // static methods can be called withiout initializing an object for class eg. Animal.myType();
        console.log("Animal");
    };
};

let dog = new Animal("Dog", 4);
let a= dog.describe();
console.log(a);
dog.consoleLogging();
Animal.myType(); // here we are calling a method/funciton without initializing an object for class animal.

