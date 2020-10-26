/* 
Hi, here's your problem today. This problem was recently asked by Uber:

Imagine you are building a compiler. Before running any code,
the compiler must check that the parentheses in the program are balanced.
Every opening bracket must have a corresponding closing bracket.
We can approximate this using strings.

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid. An input string is valid if:

Open brackets are closed by the same type of brackets.
Open brackets are closed in the correct order.
Note that an empty string is also considered valid.
Example:

Input: "((()))"
Output: True

Input: "[()]{}"
Output: True

Input: "({[)]"
Output: False */

const brackets = "(){}";

function checkBrackets(str){

    let stack = [];

    let backets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // Insert into array the openin backet
        if (
        str[i] === '(' ||
        str[i] === '{' ||
        str[i] === '[' ) {

        stack.push(str[i]);
        console.log("apertura", i, stack);
    
        }
        //if its a closer bracket
        else {
            
            //Get the last element of the array
            let lastBacket = stack.pop();
            
            //and compare the closer bracket with its pair in the stack object
            //if doesn't match return false
            if (str[i] !== backets[lastBacket]) {
                return false};
        }
    }
   // if the stack is not empty then fail
   if (stack.length !== 0) {
       return false
    };
console.log(stack);
//at the end 
   return true;
}

const result = checkBrackets(brackets);
console.log(result);

