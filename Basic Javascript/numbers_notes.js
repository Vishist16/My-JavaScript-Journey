function explainParseInt(value){
    console.log("Original valuye: "+value);
    let result = parseInt(value);
    console.log("After parseInt: "+ result);
};

function explainParseFloat(value){
    console.log("Orignal String: "+value);
    let result = parseFloat(value);
    console.log("After parseFloat: "+result);
}

explainParseInt("24Horse");
explainParseInt("hello24");
explainParseInt("56");
explainParseInt("3.14");
explainParseFloat("3.14");
explainParseFloat("56");