/*jshint esversion: 6 */

// var leftWidth = 1;
// let left = 3;
// const pi = 3.14;
// // console.log(23);

// var number = 5;
// var string = "hello";
// var sym = Symbol();
// var bool = true;
// null;
// undefined;
// var object = {};

// let person = {
//     name: "John",
//     age: 25,
//     isMarried: true
// };


// // console.log(person.age);
// // console.log(person['name']);

// let arr = ['photo1.png', 'photo2.png', 'photo3.jpg'];
// // console.log(arr[0]);

// // alert("hi");
// // let conf = confirm("are you shure?");
// // console.log(conf);

// // let conf = prompt("are you shure?", "yes");
// // console.log(typeof(conf));


// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// // console.log(incr, decr);

// let isChecked = true,
//     isClosed = true,
//     isNice = false;

// // console.log(isChecked || isClosed || isNice);

// let num = 50;

// // if (num < 49){
// //     console.log("Меньше 49");

// // }else if(num > 51){
// //     console.log("Больше 51");
// // }else{
// //     console.log("Число равно 50");
// // }

// switch (num){
//     case num > 100:
//         console.log("Mnogo");
//         break;
//     case 50:
//         console.log("Ravno 50");
//         break;
// }





// // while (numb >=5){
// //     console.log(numb);
// //     numb--;
// // }


// let numb = 16;
// do{
//     console.log(numb);
//     numb++;
// }
// while(numb < 15);


// for(let i = 0; i <= 7; i++){
//     if(i%2 != 0){
        
//         continue;
//     }
//     console.log(i);
// }



// let x = 5; 
// console.log( x++ );

// console.log([ ] + false - null + true);

// let y = 1; 
// let x = y = 2;
// console.log(x);

// console.log(typeof("hi" + 2));

// console.log( "1"[0] );

// console.log(2 && 1 && null && 0 && undefined);

// console.log( null || 2 && 3 || 4 );

// a = [1, 2, 3]; b = [1, 2, 3];
// console.log(a == b);

// console.log( +"Infinity" );

// console.log(0 || "" || 2 || undefined || true || falsе);


function calc(a, b){
    return (a*b);
}


let res = calc(3, 4);
console.log(res);

let calc1 = function(x, y){
    return (x/y);
};

console.log(calc1(10, 5));


let show = (num) => console.log(num);
show(5);

let number = 31.5;
console.log(Math.round(number));

let str = "hiiiii";
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

function sayHi(wrd, callback){
    console.log(wrd);
    callback();
}

function call(){
    console.log("jjjj");
}

sayHi("hellooo", call);

let obj = {
    weight: 1000,
    height: 300,
    color: "black"

};


console.log(Object.getOwnPropertyNames(obj));

for(let key in obj){
    console.log("Свойство " + key + "Имеет значение " + obj[key]);

}




// console.log(Math.random(arr).toFixed());

// console.log(Object.keys(obj)[0]);

// let arr = [1, 3, 5, 6];
// function func(wr){
//     console.log(wr);
// }

// arr.push(func("kiiiiii"));

// console.log(arr[4]);




// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function (item, i, array){
//     console.log(i + " : " + item + " in array " + array)
// });



let word = "q, w, e, r, t, y, uutttt";
let arr1 = word.split(", ");
console.log(arr1);


let arr2 = ["ewqqwe", "ewewq", "fdfds"],
    word2 = arr2.join("/ ");
console.log(word2);    

arr2 = ["ewqqwe", "ewewq", "fdfds"];
function func(item, i, arr){
    console.log(i + " : " + item + " in array " + arr);
}

arr2.forEach(func());


function Car(name, model){
    this.name = name;
    this.model = model;
}

let car = new Car("BMW", "X6");

console.log(car.name, car.model);


class Auto{
    constructor(name){
        this.name = name;

    }

    sayNameOfAuto(){
        console.log(this.name);
    }

}
let auto = new Auto("BMW");
auto.sayNameOfAuto();

class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
  // Использование:
  let user = new User("Иван");
  user.sayHi();