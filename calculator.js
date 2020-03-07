function add(a,b){
    return a + b
}
function subtract(a,b){
    return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}
function operator(operator, firstArg, secondArg){
    switch (operator){
        case add:
            return add(firstArg,secondArg);
            break;
        case subtract:
            return subtract(firstArg,secondArg);
            break;
        case multiply:
            return multiply(firstArg,secondArg);
            break;
        case divide:
            return divide(firstArg,secondArg);
            break;
    }
    }

    const calculatorZone = document.getElementById('calculator');
    const displayZone = document.getElementById('display');
    const inputZone = document.getElementById('inputZone');
    const answerZone = document.getElementById('answerZone')
   // displayZone.style.width = parseInt(calculatorZone.style.width.slice(0,-2) * 0.9) + "px";
  //  inputZone.style.width = displayZone.style.width;
   // answerZone.style.width = displayZone.style.width;
  //  displayZone.style.zIndex = calculatorZone.style.zIndex + 1;
    //const equalsBtn = document.getElementById('equals')

  