//can iterate over string !!!!!!!!!!!!!!!!!!

//functions for each operator
function add(numberA,numberB){
    return numberA + numberB;
}

function subtract(numberA,numberB){
    return numberA-numberB;
}

function multiply(numberA,numberB){
    return numberA*numberB;
}

function divide(numberA,numberB){
    return numberA/numberB;
}
//take in inputs
// show inputs on screen
//store as strings then turn to numbers?
//when operator selected stop input into number A and start number B
//or could store whole thing as 1 big strign that i split allowing whole expression to be displayed
    //might need tempalte literals for a refresher or reghular expressions
// call correct operator function when pressing equals if other operator selected then perform calculation and load the operator for user
function operate(numberA,operation,numberB){
    numberA=+numberA;
    numberB=+numberB;
    switch(operation){
        case '+':
            return add(numberA,numberB);
        case '-':
            return subtract(numberA,numberB);
        case '*':
            return multiply(numberA,numberB);
        case '/':
            return divide(numberA,numberB);
    }
}
//return answer to display and make useable in future calculations
//bonus store into a history