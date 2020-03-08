function add(a,b){
    return parseFloat(a) + parseFloat(b)
}
function subtract(a,b){
    return parseFloat(a) - parseFloat(b)
}
function multiply(a,b){
    return parseFloat(a) * parseFloat(b)
}
function divide(a,b){
    return parseFloat(a) / parseFloat(b)
}

function operate(operator, firstArg, secondArg){
    switch (operator){
        case '+':
            return add(firstArg,secondArg);
            break;
        case '-':
            return subtract(firstArg,secondArg);
            break;
        case 'x':
            return multiply(firstArg,secondArg);
            break;
        case '*':
            return multiply(firstArg,secondArg);
        case '/':
            return divide(firstArg,secondArg);
            break;
        }
    }

    const calculatorZone = document.getElementById('calculator');
    const displayZone = document.getElementById('display');
    const inputZone = document.getElementById('inputZone');
    const answerZone = document.getElementById('answerZone')

    document.querySelectorAll('.digitz').forEach(item => {
        item.addEventListener('click', event => {
            updateOperands(item.textContent)
        })
    })
    const firstOperandSpan = document.getElementById('firstOperand');
    const operatorSpan = document.getElementById('operator');
    const secondOperandSpan = document.getElementById('secondOperand');

    function updateOperands(value){
        if (operatorSpan.textContent == ''){
            firstOperandSpan.textContent += value;
        } else {
            secondOperandSpan.textContent += value;
        }
    }

    document.querySelectorAll('.operatorBtn').forEach(item => {
        item.addEventListener('click', event => {
            updateOperator(item.textContent)
        })
    })
    function updateOperator(value){
        if (firstOperandSpan.textContent != '' && secondOperandSpan.textContent == ''){
        operatorSpan.textContent = value;
        } else if (firstOperandSpan.textContent != '' && secondOperandSpan.textContent != ''){
            let meanwhile = operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent);
            firstOperandSpan.textContent = meanwhile;
            answerZone.textContent = meanwhile;
            operatorSpan.textContent = value;
        } else if (firstOperandSpan.textContent == '' && answerZone.textContent != ''){
            firstOperandSpan.textContent = answerZone.textContent;
            operatorSpan.textContent = value;
        }
     }

    const eqlBtn = document.getElementById('equals');

    eqlBtn.onclick = function(){
        if (firstOperandSpan.textContent != '' && operatorSpan.textContent != '' && secondOperandSpan.textContent != ''){
            let answer = operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent);
            answerZone.textContent = answer;
            firstOperandSpan.textContent = '';
            operatorSpan.textContent = '';
            secondOperandSpan.textContent = '';
        }
    }

    const clearBtn = document.getElementById('clear');

    clearBtn.onclick = function(){
        firstOperandSpan.textContent = '';
        operatorSpan.textContent = '';
        secondOperandSpan.textContent = '';
        answerZone.textContent = '';
    }