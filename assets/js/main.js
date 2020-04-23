"use strict";
let users = [
    {name: "Abby", sex: "female", "year of birth": 1999 },
    {name: "Oliver", sex: "male", "year of birth": 1998 },
    {name: "Alexa", sex: "female", "year of birth": 1999 },
    {name: "Harry", sex: "male", "year of birth": 2000 },
    {name: "Alice", sex: "female", "year of birth": 1997 },
    {name: "Thomas", sex: "male", "year of birth": 1998 },
    {name: "Diana", sex: "female", "year of birth": 2000 },
    {name: "George", sex: "male", "year of birth": 1999 },
    {name: "Helen", sex: "female", "year of birth": 2000 }
];

let today = new Date();
let todayYear = today.getFullYear();


function calcAverage (user) {
    let arr = [];
    let years = 0;
    let average = 0;
    let sumYears = 0;
    let roundedYear = 0;

    for (let i = 0; i < users.length; i++) {
        arr = users[i];
        years = (todayYear - arr["year of birth"]);
        sumYears += years;
    }
    average = (sumYears / users.length);
    roundedYear = Math.round(average);
    return roundedYear;
}
console.log("Средний возраст: " + calcAverage(users));

function getWhoMore(users) {
    let arrMale = [];
    let quantityMale = 0;
    let quantityFemale = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].sex === "male") {
            arrMale.push(users[i].sex); 
        }
    }
    quantityMale = arrMale.length;
    quantityFemale = users.length - quantityMale;
    if (quantityMale > quantityFemale) {
        console.log("Парней больше.");
        return quantityMale;
    }
    else if (quantityMale < quantityFemale) {
        console.log("Девушек больше.");
        return quantityFemale;
    }
    else {
        console.log("Парней и девушек поровну");
        return "quantityFemale = quantityMale";
    }
}
// console.log("Их " + getWhoMore(users));
getWhoMore(users);


function addProperties (users) {
    let arrStaff = [];
    for (let i = 0; i < users.length; i++) {
            var staff = Object.assign({}, users[i]);
            staff.salary = 45;
        arrStaff.push(staff);
    }
    return arrStaff;
}
console.log(addProperties(users));
// console.log(users);   // Проверка копирования