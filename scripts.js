// this section is to define what happens for the counter button

let count_button = document.getElementById("count-up") // accessing the button
let number = document.getElementById("num-box") // accessing the division for displaying the number and its value

// event listener is going to listen for a 'click' event on the specified button.
// once the event is detected, its going to run the specified function called 'counter_func'
count_button.addEventListener("click", counter_func); 

// definition of 'counter_func' function
// This is a function definition. In javascript, these types of functions can be called before declaration.
function counter_func() {

    // the below code accesses the inner text content of the division showing the number
    // parseInt() function converts the received value into an integer value
    // because by default, javascript won't recognize that the text is a number.

    number.innerText = parseInt(number.innerText) + 1;

}

// function declaration

function square_var(x,y) {
    return ((x**2) + (2*x*y) + (y**2));
}

// Since the above function only has one expression, we can use other types of functions:

// 1. anonymous functions

var square_var_1 = function(x,y) { return ((x**2) + (2*x*y) + (y**2)) };

// 2. arrow functions 

var square_var_2 = (x,y) => { return ((x**2) + (2*x*y) + (y**2)) }

// The above 2 functions can be called 'function expression'
// These functions can have multiple arguments but only one expression

document.write("<h3><strong>Following is the output of the function calls of the square functions </strong></h3>")
document.write(square_var(3,3));
document.write("<br>")
document.write(square_var_1(2,4));
document.write("<br>")
document.write(square_var_2(2,4));


