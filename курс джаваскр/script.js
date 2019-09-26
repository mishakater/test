/*jshint esversion: 6 */

var leftWidth = 1;
let left = 3;
const pi = 3.14;
// console.log(23);

var number = 5;
var string = "hello";
var sym = Symbol();
var bool = true;
null;
undefined;
var object = {};

let person = {
    name: "John",
    age: 25,
    isMarried: true
};


// console.log(person.age);
// console.log(person['name']);

let arr = ['photo1.png', 'photo2.png', 'photo3.jpg'];
// console.log(arr[0]);

// alert("hi");
// let conf = confirm("are you shure?");
// console.log(conf);

// let conf = prompt("are you shure?", "yes");
// console.log(typeof(conf));


let incr = 10,
    decr = 10;

incr++;
decr--;

// console.log(incr, decr);

let isChecked = true,
    isClosed = true,
    isNice = false;

// console.log(isChecked || isClosed || isNice);

let num = 50;

// if (num < 49){
//     console.log("Меньше 49");

// }else if(num > 51){
//     console.log("Больше 51");
// }else{
//     console.log("Число равно 50");
// }

switch (num){
    case num > 100:
        console.log("Mnogo");
        break;
    case 50:
        console.log("Ravno 50");
        break;
}