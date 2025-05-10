/*
*TODO: 
* Allow result to be used in next calculation
*/


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
 let hasDecimal = false;
 let hasDecimal2 = false;

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const value = button.textContent;

        if(calculatorScreen.textContent == "error")
                clear();
       
        if(isNum(value) && isNum2 == false){
            current += value;
            displayNumOne(current);
            isNum1 = true;
        }
        else if(isOperator(value) && isNum1){
            calculatorScreen.textContent += value + " ";
            operator = value;
            isNum1 = false;
            isNum2 = true;
        }

        else if(isNum(value) && isNum2){
            current2 += value;
            displayNumTwo(current2);
             
        }
        //delete button
        else if(value == "DEL"){
            if(isNum2 == false){
                current = current.slice(0, -1);
                displayNumOne(current);
                hasDecimal = current.includes('.');

            }
            else if(isNum2){
               current2 = current2.slice(0, -1);
               displayNumTwo(current2);
               hasDecimal2 = current2.includes('.');
            }
        }
        //pos/neg button
        else if(value =="+/-"){
            if(isNum2 == false){
                num1 = posNeg(parseFloat(current));
                current = num1.toString();
                displayNumOne(current);
            }
            else if(isNum2){
                num2 = posNeg(parseFloat(current2));
                current2 = num2.toString();
                displayNumTwo(current2);
            }
        }
        //decimal button
        else if(value =="."){
            if(isNum2 == false && hasDecimal == false){
                current += ".";
                displayNumOne(current);
                hasDecimal = true;
            }
            else if(isNum2 && hasDecimal2 == false){
                current2 += ".";
                displayNumTwo(current2);
                hasDecimal2 = true;
            }
        }
        //clear button
        else if(value == "C"){
            clear();
        }
        //equal button
        else if (value == "="){
            num1 = parseFloat(current);
            num2 = parseFloat(current2);
            result = operate(num1,operator,num2);

            //checks if its an integer or not
            if(!Number.isInteger(result)){
            calculatorScreen.textContent = result.toFixed(4)
            }
            else{
            calculatorScreen.textContent = result;
            }

            current = "";
            current2 = "";
            isNum1 = false;
            isNum2 = false;
            hasDecimal = false;
            hasDecimal2 = false;
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
if(values == "÷" || values == "-" || values == "+" || values == "*" || values =="%")
    return true;
else
    return false;
}

function displayNumOne(value){
 calculatorScreen.textContent = value + " ";
}

function displayNumTwo(value) {
  calculatorScreen.textContent = current + " " + operator + " " + value;
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
hasDecimal = false;
hasDecimal2 = false;

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
else if(operator == "%")
    return percent(num1,num2);
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

//percentage function
function percent(num1,num2){
return (0.01 * num1) * num2;
}

//pos/neg function
function posNeg(nums){
    return (-1 * nums);
}