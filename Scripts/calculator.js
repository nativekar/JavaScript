/*
You are building an educational website and want to create a simple calculator for students to use. The calculator will only allow addition and subtraction of non-negative integers.

Given an expression string using the "+" and "-" operators like "5+16-2", write a function to find the total.

Sample input/output:
calculate("6+9-12")  => 3 // arr  [6, +, 9, -, 12] => if(operator == '+') add(arr[i-1], arr[i+1]) 
calculate("1+2-3+4-5+6-7") => -2
calculate("100+200+300") => 600
calculate("1-2-3-0") => -4
calculate("255") => 255
calculate("0-1-2-3") => -6

n: length of the input string

*/

"use strict";

const expression1 = "6+9-12"; // = 3
const expression2 = "1+2-3+4-5+6-7"; // = -2
const expression3 = "100+200+300"; // = 600
const expression4 = "1-2-3-0"; // = -4
const expression5 = "255"; // = 255
const expression6 = "0-1-2-3"; // = -6


const calculator = (expression) => {

const expArr = expression.split('');

let count = 0, value = 0;

const numbersArr = [];


for(let i = 0; i < expArr.length; i++){
  
  if(expArr[i] !== '+' && expArr[i+1] !== '+' && expArr[i] !== '-' && expArr[i+1] !== '-' ) count++;
  
}


for(let i = 0; i < expArr.length; i++){

  if(expArr[i] !== '+' && expArr[i+1] !== '+' && expArr[i] !== '-' && expArr[i+1] !== '-' ){
        while((expArr [i] !== '+' || expArr[i] !== '-') && (i < expArr.length - 1)){

               numbersArr.push(expArr[i]);
                i++;


          }
    }

}


console.log(numbersArr);



 // return result;
}

calculator(expression1);
