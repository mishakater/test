/*jshint esversion: 6 */


let square = document.getElementById("box"),
    btn = document.querySelectorAll(".wrapper button");
    div = document.createElement("div");
    wrapper = document.querySelector(".wrapper");
    

// // btn[0].style.backgroundColor = "green";
// square.style.backgroundColor = "violet";

// // for(let i =0; i < 3; i++){
// //     btn[i].style.backgroundColor = "yellow";
// // }

// btn.forEach(function(item){
//     item.style.backgroundColor = "yellow";
// });

// div.classList.add("black");
// //document.body.appendChild(div);
// //wrapper.appendChild(div);
// //wrapper.insertBefore(div, btn[1]);
// wrapper.replaceChild(div, btn[1]);

// div.innerHTML = "<h2>Hello world!</h2>";

// wrapper.removeChild(wrapper[])

// btn[0].onclick = function(){
//     alert("hello");
// };

// btn[0].addEventListener("click", function(){
//     console.log("you pushed the button");
// });

// btn.forEach(element => {
//     element.addEventListener('mouseenter', function() {
//         element.style.backgroundColor = "white";
//     });

//     element.addEventListener('mouseleave', function() {
//         element.style.backgroundColor = "black";
//     });

// });

btn[0].addEventListener('click', function(e){
    console.log(e.target);

});