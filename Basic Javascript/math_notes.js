function mathMethods(value){
    console.log("original value: " + value);

    let rounded = Math.round(value);
    console.log("After round: " + rounded);

    let ceil = Math.ceil(value);
    console.log("After ceil: " + ceil);

    let floor = Math.floor(value);
    console.log("After floor: " + floor);

    let randomValue = Math.random(value);
    console.log("After random: " + randomValue);

    let maxValue = Math.max(5,15,20);
    console.log("After Max: " + maxValue);

    let minValue = Math.min(12,15,20);
    console.log("After Min: " + minValue);

    let powerofTwo = Math.pow(value, 2);
    console.log("After pow() :" + powerofTwo);
};

mathMethods(5.23);