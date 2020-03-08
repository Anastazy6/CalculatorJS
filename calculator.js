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
    if (b != '0'){
    return parseFloat(a) / parseFloat(b)
    } else {
        alert("Division by zero is not possible! Since this site is kinda hell-themed, there's little room for additional punishment for such a sin. Hope clearing the calculator suffices... ");
        clearBtn.click();
    }
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

    function checkIfEvil(element){
        if (element.textContent == '666'){
            element.classList.add('burning')
        } else {
            if (element.classList.contains('burning')){
                element.classList.remove('burning')
            }
        }
    }
    function checkIfEvilAll(){
        checkIfEvil(firstOperandSpan);
        checkIfEvil(secondOperandSpan);
        checkIfEvil(answerZone);
    }

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
            checkIfEvilAll();
        } else {
            secondOperandSpan.textContent += value;
            checkIfEvilAll();
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
            let meanwhile = roundTo5decimalsMax(operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent));
            firstOperandSpan.textContent = meanwhile;
            answerZone.textContent = meanwhile;
            operatorSpan.textContent = value;
            secondOperandSpan.textContent = '';
            checkIfEvilAll();
        } else if (firstOperandSpan.textContent == '' && answerZone.textContent != ''){
            firstOperandSpan.textContent = answerZone.textContent;
            operatorSpan.textContent = value;
            checkIfEvilAll();
        }
     }

    const eqlBtn = document.getElementById('equals');

    function roundTo5decimalsMax(halfProduct){
        halfProduct *= 100000;
        halfProduct = Math.round(halfProduct)
        return halfProduct / 100000
    }

    eqlBtn.onclick = function(){
        if (firstOperandSpan.textContent != '' && operatorSpan.textContent != '' && secondOperandSpan.textContent != ''){
            let answer = roundTo5decimalsMax(operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent));
            answerZone.textContent = answer;
            firstOperandSpan.textContent = '';
            operatorSpan.textContent = '';
            secondOperandSpan.textContent = '';
            checkIfEvilAll();
        }
    }

    const clearBtn = document.getElementById('clear');

    clearBtn.onclick = function(){                  // since all the data is stored as textContent, clearing these 4 spans/zones is enough to start
        firstOperandSpan.textContent = '';   // calculating from scratch. Seriosly, no variables, just text contend. The price of this simplicity
        operatorSpan.textContent = '';          // of calculations and clearing is writing '.textContent' a kjære-Odin-ton times. Kinda WET.
        secondOperandSpan.textContent = '';
        answerZone.textContent = '';
        checkIfEvilAll();
    }

    const backspaceBtn = document.getElementById('backspace');
    backspaceBtn.onclick = function(){
        if (secondOperandSpan.textContent != ''){
            secondOperandSpan.textContent = secondOperandSpan.textContent.slice(0,-1);
        } else if (operatorSpan.textContent != ''){
            operatorSpan.textContent = '';
        } else if (firstOperandSpan.textContent != ''){
            firstOperandSpan.textContent = firstOperandSpan.textContent.slice(0,-1);
        } else {
            console.log("It seems you are pushing the backspace button regardless of the fact that there's nothing to clear. Hope you enjoy it!")
        } checkIfEvilAll();
    }

    const dotBtn = document.getElementById('dot');
    dotBtn.onclick = function(){
        if (firstOperandSpan.textContent == ''){
            firstOperandSpan.textContent += '0.';
        } else if (firstOperandSpan.textContent != '' && operatorSpan.textContent == ''){
            let sanityCheck = firstOperandSpan.textContent.split('');
            if (!sanityCheck.includes('.')){
                console.log(sanityCheck)
                firstOperandSpan.textContent += '.';
            }  
        } else if (operatorSpan.textContent != '' && secondOperandSpan.textContent == ''){
            secondOperandSpan.textContent += '0.';
        } else {
            let sanityCheck = secondOperandSpan.textContent.split('');
            if (!sanityCheck.includes('.')) {
                secondOperandSpan.textContent += '.'
            }
        }   checkIfEvilAll();
    }

    const partyBtn = document.getElementById('vodka');
    
    partyBtn.onclick = function(){
        if (firstOperandSpan.textContent != '' && operatorSpan.textContent != '' && secondOperandSpan.textContent != ''){
            if (operatorSpan.textContent == '+' || operatorSpan.textContent == '-'){
            let alc  = parseFloat(firstOperandSpan.textContent) * parseFloat(secondOperandSpan.textContent);
            secondOperandSpan.textContent = `${alc / 100}`;
            eqlBtn.click();
        } else {
            let alc = parseFloat(secondOperandSpan.textContent) / 100;
            secondOperandSpan.textContent = `${alc}`;
            eqlBtn.click();
        }
        } checkIfEvilAll();
    }