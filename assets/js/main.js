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
]

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
        for (let key in arr) {
            years = (todayYear - arr["year of birth"]);
            
        }
        sumYears += years;
    }
    average = (sumYears / users.length);
    roundedYear = Math.round(average);
    return roundedYear;
}
console.log("Средний возраст: " + calcAverage(users));


function getWhoMore(user) {
    let arr = [];
    let arr1 = [];
    let arrSex = [];
    let arrFemale = [];
    let arrMale = [];

    for (let i = 0; i < users.length; i++) {
        arr = users[i];
        for (let key in arr) {
            arr1 = arr.sex;
        }
        arrSex.push(arr1);
    }

    for (let j = 0; j < arrSex.length; j++) {
        if (arrSex[j] === "male") {
            arrMale.push(arrSex[j]);
        }
        else if (arrSex[j] === "female") {
            arrFemale.push(arrSex[j]);
        }
        if (arrFemale > arrMale) {
            return "Девушек больше, чем парней"
        }
        else if (arrFemale < arrMale) {
            return "Парней больше, чем девушек"
        }
    }
}
console.log(getWhoMore(users));

// let someUsersMale = users.filter(item => item.sex === "male");
// let someUsersFemale = users.filter(item => item.sex === "female");
// if (someUsersMale > someUsersFemale) {
//     console.log("Парней больше, чем девушек");
// }
// else {
//     console.log("Девушек больше, чем парней");
// }

function addProperty() {
    let arrStaff = users;

    for (let i = 0; i < arrStaff.length; i++) {
        arrStaff[i].salary = 45;
    }
    console.log(arrStaff);
}
addProperty();