let buttons = document.querySelectorAll('button');
let calculatorScreen = document.querySelector(".calculator.nums");

let num1 = null;
let num2 = null;
let operator = "";
let current = "";
let current2 = "";
 let isNum1 = false;
 let isNum2 = false; 
 let result = null;

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const value = button.textContent;
        if(calculatorScreen.textContent == "error")
                clear();
       
        if(isNum(value) && isNum2 == false){
            current += value;
            calculatorScreen.textContent = current;
            num1 = parseInt(current);
            isNum1 = true;
        }
        else if(isOperator(value) && isNum1){
            calculatorScreen.textContent += value;
            operator = value;
            isNum1 = false;
            isNum2 = true;
        }

        else if(isNum(value) && isNum2){
            current2 += value;
            calculatorScreen.textContent += value;
             num2 = parseInt(current2);
        }
        else if(value == "C"){
            clear();
        }
        else if (value == "="){
            calculatorScreen.textContent = operate(num1,operator,num2);
            result = operate(num1,operator,num2);
            current = "";
            current2 = "";
            isNum1 = false;
            isNum2 = false;
        }
        else
        return false;
    })
})

function isNum(values){
if(values == "0" || values == "1" || values == "2" || values == "3" || values == "4" ||
    values == "5" || values == "6" || values == "7" || values == "8" || values == "9")
    return true;
else
    return false;
}

function isOperator(values){
if(values == "÷" || values == "-" || values == "+" || values == "*" )
    return true;
else
    return false;
}

//clear button
function clear(){
num1 = null;
num2 = null;
operator = "";
current = "";
current2 = "";
isNum1 = false;
isNum2 = false;
result = null;
calculatorScreen.textContent = "";

}


//operate function
function operate(num1, operator, num2){
if (operator == "+")
   return addition(num1,num2);
else if(operator == "-")
    return subtraction(num1,num2);
else if(operator == "*")
    return multiple(num1,num2);
else if(operator == "÷")
    return divide(num1,num2);
else if (num1 == null || operator== "" || num2 ==null)
    return "error";
else
    return "error"
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
    if(num2 == 0){
        return "error";
    }
    else
        return num1 / num2;
}