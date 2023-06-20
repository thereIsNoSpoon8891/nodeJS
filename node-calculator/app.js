const readlineSync = require('readline-sync');

// 1. prompt the question:Please enter your first number
// store the value of first question

// 2. prompt the second question: Please enter your second number
//store the value of second question

//3. prompt the third question: Please enter the operation you would like to perform: add, mul, div, sub

// based on the operation entered, call the function and print to the console: The result is:(the result)

// my blockers:
// how do I store the values?   ANSWERED: readlineSync.question
// how to prompt the questions in the console based on the input, I will use an IF statement, but I need 
// the syntax to properly run this in the terminal use console.log()//// remember its still JS....

function add (num1, num2){
    return num1 + num2
}

function mul (num1, num2){
    return num1 * num2
}

function div (num1, num2){
    return num1 / num2
}

function sub (num1, num2){
    return num1 - num2
}

const num1 = Number(readlineSync.question('Please enter your first number '));
const num2 = Number(readlineSync.question('Please enter your second number '));
const operationType = readlineSync.question('Please enter the operation you would like to perform: add, mul, div, sub ')



 if(operationType === 'add'){
     let result = add(num1,num2)
    return(console.log(result))
} else if (operationType === 'sub'){
    let result = sub(num1,num2)
    return console.log(result)
} else if (operationType === 'div'){
    let result = div(num1, num2)
    return console.log(result)
} else if (operationType === 'mul'){
    let result = mul(num1, num2)
    return console.log(result)
} else {
    console.log('*Invalid Operation*')
}