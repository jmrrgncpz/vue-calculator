const createNumberInput = function(value){
    return {
        text : value.toString(),
        class : "number-input",
        action: function (context) {
            const expressionHasSelectedOperator = !!context.currentOperation;

            if (expressionHasSelectedOperator || context.anEquationIsJustEvaluated) {
                context.currentOperation = null;
                context.input = 0;
            }

            context.input = appendNumberToInput(context.input, value);
            context.anEquationIsJustEvaluated = false;
        }
    }
}

const generateNumberInputs = function () {
    const numbersInputs = [];
    for (let i = 0; i <= 9; i++) {
        const numberInput = createNumberInput(i);
        numbersInputs.push(numberInput);
    }

    numbersInputs.push(createNumberInput("."));

    return numbersInputs
}

const inputModifiers = [
    {
        text: "CE",
        class: "clear-entry-button",
        action: function (context) {
            context.input = 0;
            context.currentOperation = null;
        }
    },
    {
        text: "C",
        class: "clear-button",
        action: function (context) {
            context.inputsArray = [];
            context.input = 0;
            context.currentOperation = null;
        }
    },
    {
        text: "",
        class: "backspace-button fas fa-backspace",
        action: function (context) {
            if (context.input.toString().length == 1) {
                context.input = 0;
                return;
            }

            const newInput = context.input.toString().slice(0, -1);
            context.input = parseInt(newInput);
        }
    }
]

const generateOperationInputs = function () {
    const x = [
        {
            text: "",
            class: "fas fa-plus",
            value: "+",
        },
        {
            text: "",
            class: "fas fa-minus",
            value: "-",
        },
        {
            text: "",
            class: "fas fa-times",
            value: "*",
        },
        {
            text: "",
            class: "fas fa-divide",
            value: "/",
        }
    ]

    return x.map(x => {
        x.action = function (context) {
            const operator = x.value;
            const expressionHasSelectedOperator = !!context.currentOperation;

            if (expressionHasSelectedOperator) {
                replaceCurrentOperation(context.inputsArray, operator);
            } else {
                context.inputsArray.push(context.input);

                evaluate(context);

                context.inputsArray.push(operator);
            }

            context.currentOperation = operator;
        }

        return x;
    });
}

const replaceCurrentOperation = function (inputsArray, operator) {
    inputsArray.pop();
    inputsArray.push(operator);
}

const appendNumberToInput = function (input, number) {
    if (input == 0) return number;
    else return input += number.toString();
}

const evaluate = function (context) {
    debugger;
    let inputsArray = context.inputsArray.slice();
    while (inputsArray.length >= 3) {
        const expression = inputsArray.splice(0, 3).reduce((acc, current) => `${acc}${current}`, "");
        const closedExpression = `(${expression})`;

        inputsArray = [closedExpression, ...inputsArray]
    }

    context.input = eval(inputsArray[0]);
}

const equalsButton = {
    text: "",
    class: "fas fa-equals",
    action: function (context) {
        context.inputsArray.push(context.input);
        evaluate(context);

        context.$emit('equation-evaluated', { inputsArray: context.inputsArray, result: context.input });

        context.inputsArray = [];
        context.anEquationIsJustEvaluated = true;
    }
}

export default [
    ...inputModifiers,
    ...generateNumberInputs(),
    ...generateOperationInputs(),
    equalsButton
]