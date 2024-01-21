// JSON stands for Javascript Object Notation
// JSON.parse()
// JSON.strigify()

const users = {name: "Vishist",
    age: 20,
    uid: "21BCS5851"
};

const user = JSON.stringify(users);
console.log(user);
const userObj = JSON.parse(user);
console.log(userObj);

