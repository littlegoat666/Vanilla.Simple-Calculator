const displayBox = document.querySelector('.display'),
        displayInput = document.querySelector('.display-input'),
        displayResult = document.querySelector('.display-result'),
        buttons = document.querySelectorAll('button'),
        operators = ['%', '÷', '×', '-', '+'];
let input = '',
    result = '',
    lastCalculation = false;

// Main Function To Handle Calculator Logic
    const calculate = btnValue => {
        const lastChar = input.slice(-1),
            secondToLastChar = input.slice(-2, -1),
            withoutLastChar = input.slice(0, -1),
            isLastCharOperator = operators.includes(lastChar),
            isInvalidResult = ['Error', 'Infinity'].includes(result);
        let { openBracketsCount, closeBracketsCount } = countBrackets(input);

        // Handle Equals
            if (btnValue === '=') {
                if (
                    input === '' ||
                    lastChar === '.' ||
                    lastChar === '(' ||
                    isLastCharOperator && lastChar !== '%' ||
                    lastCalculation
                ) return;

                while (openBracketsCount > closeBracketsCount) {
                    input += ')';
                    closeBracketsCount++;
                }

                const formattedInput = replaceOperators(input);
                try {
                    const calculatedValue = input.includes('%') ? calculatePercentage(input) : eval(formattedInput);
                    result = parseFloat(calculatedValue.toFixed(10)).toString();
                } catch {
                    result = 'Error';
                }

                input += btnValue;
                lastCalculation = true;
                displayBox.classList.add('active');
            }

        // Handle AC (All Clear)
            else if (btnValue === 'AC') {
                resetCalculator('');
            }

        // Handle Backspace
            else if (btnValue === '') {
                if (lastCalculation) {
                    if (isInvalidResult) resetCalculator('');
                    resetCalculator(result.slice(0, -1));
                }
                else input = withoutLastChar;
            }

        // Handle Operators
            else if (operators.includes(btnValue)) {
                if (lastCalculation) {
                    if (isInvalidResult) return;
                    resetCalculator(result + btnValue);
                }
                else if (
                    (input === '' || lastChar === '(') && btnValue !== '-' || input === '-' || lastChar === '.' || secondToLastChar === '(' && lastChar === '-' || (secondToLastChar === '%' || lastChar === '%') && btnValue == '%'
                ) return;
                else if (lastChar === '%') input += btnValue;
                else if (isLastCharOperator) input = withoutLastChar + btnValue;
                else input += btnValue;
            }
        
        // Handle Decimal
            else if (btnValue === '.') {
                const decimalValue = '0.';
                if (lastCalculation) resetCalculator(decimalValue);
                else if (lastChar === ')' || lastChar === '%') input += '×' + decimalValue;
                else if (input === '' || isLastCharOperator || lastChar === '(') input += decimalValue;
                else {
                    let lastOperatorIndex = -1;
                    for (const operator of operators) {
                        const index = input.lastIndexOf(operator);
                        if (index > lastOperatorIndex) lastOperatorIndex = index;
                    }

                    if (!input.slice(lastOperatorIndex + 1).includes('.')) input += btnValue;
                }
            }

        // Handle Brackets
            else if (btnValue === '( )') {
                if (lastCalculation) {
                    if (isInvalidResult) resetCalculator('(');
                    else resetCalculator(result + '×(');
                }
                else if (lastChar === '(' || lastChar === '.') return;
                else if (input === '' || isLastCharOperator && lastChar !== '%') input += '(';
                else if (openBracketsCount > closeBracketsCount) input += ')';
                else input += '×(';
            }

        // Handle Number
            else {
                if (lastCalculation) resetCalculator(btnValue);
                else if (input === '0') input = btnValue;
                else if ((operators.includes(secondToLastChar) || secondToLastChar === '(') && lastChar === '0') input = withoutLastChar + btnValue;
                else if (lastChar === ')' || lastChar === '%' ) input += '×' + btnValue;
                else input += btnValue;
            }

        // Update Display
            displayInput.value = input;
            displayResult.value = result;
            displayInput.scrollLeft = displayInput.scrollWidth;
    };

// Function To Replace Division (÷) And Multiplication (×) Symbols With JavaScript-Compatible Operators ('/' And '*')
    const replaceOperators = input => input.replaceAll('÷', '/').replaceAll('×', '*');

// Function To Reset Calculator State With A New Input Value
    const resetCalculator = newInput => {
        input = newInput;
        result = '';
        lastCalculation = false;
        displayBox.classList.remove('active');
    };

// Function To Count Brackets In Input
    const countBrackets = input => {
        let openBracketsCount = 0,
            closeBracketsCount = 0;
        for (const char of input) {
            if (char === '(') openBracketsCount++;
            else if (char === ')') closeBracketsCount++;
        }

        return { openBracketsCount, closeBracketsCount };
    };

// Function To Percentage Calculations
    const calculatePercentage = input => {
        let processedInput = '',
            numberBuffer = '';
        const bracketsState = [];

        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (!isNaN(char) || char === '.') numberBuffer += char;
            else if (char === '%') {
                const percentageValue = parseFloat(numberBuffer) / 100,
                    prevOperator = i > 0 ? input[i - numberBuffer.length - 1] : '',
                    nextOperator = i + 1 < input.length && operators.includes(input[i + 1]) ? input[i + 1] : '';
                
                if (!prevOperator || prevOperator === '÷' || prevOperator === '×' || prevOperator === '(') processedInput += percentageValue;
                else if (prevOperator === '-' || prevOperator === '+') {
                    if (nextOperator === '÷' || nextOperator === '×') processedInput += percentageValue;
                    else processedInput += '(' + processedInput.slice(0, -1) + ')*' + percentageValue;
                }
                numberBuffer = '';
            }
            else if (operators.includes(char) || char === '(' || char === ')') {
                if (numberBuffer) {
                    processedInput += numberBuffer;
                    numberBuffer = '';
                }

                if (operators.includes(char)) processedInput += char;
                else if (char === '(') {
                    processedInput += '(';
                    bracketsState.push(processedInput);
                    processedInput = '';
                }

                else {
                    processedInput += ')';
                    processedInput = bracketsState.pop() + processedInput;
                }
            }
        }

        if (numberBuffer) processedInput += numberBuffer;

        return eval(replaceOperators(processedInput));
    };

// Add Click Event Listeners To All Buttons
    buttons.forEach(button => 
        button.addEventListener('click', e => calculate(e.target.textContent))
    );