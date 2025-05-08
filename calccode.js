let buttons = document.querySelectorAll('button');
let calculatorScreen = document.querySelector(".calculator.nums");

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        console.log(button.textContent);
    })
})
//calculato screen
function display(){
    calculatorScreen.textContent  
}

function clear(){
    calculatorScreen.textContent = " ";
}

//operate function
function operate(num1, operator, num2){
if (operator == "+")
    addition(num1,num2);
else if(operator == "-")
    subtraction(num1,num2);
else if(operator == "*")
    multiple(num1,num2);
else if(operator == "/")
    divide(num1,num2);
else
    return "error";
}

//addition function
function addition(num1, num2){
return num1 + num2;
}

//subctraction function
function subtraction(num1, num2){
return num1 - num2;
}

//multiple function
function multiple(num1, num2){
return num1 * num2;
}


//divide function
function divide(num1, num2){
    if(num2 == 0)
        return 0;
    else
        return num1 * num2;
}