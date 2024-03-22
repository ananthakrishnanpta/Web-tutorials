// this section is to define what happens for the counter button

let count_button = document.getElementById("count-up") // accessing the button
let number = document.getElementById("num-box") // accessing the division for displaying the number and its value

// event listener is going to listen for a 'click' event on the specified button.
// once the event is detected, its going to run the specified function called 'counter_func'
count_button.addEventListener("click", counter_func); 

// definition of 'counter_func' function
function counter_func() {

    // the below code accesses the inner text content of the division showing the number
    // parseInt() function converts the received value into an integer value
    // because by default, javascript won't recognize that the text is a number.

    number.innerText = parseInt(number.innerText) + 1
}