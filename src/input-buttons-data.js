Number.prototype.toPercentage = function(){
    return this.valueOf() * 0.01;
}

const createNumberInput = function(value){
    return {
        text : value.toString(),
        class : "number-input",
        action: function (context) {
            if (context.awaitingNewNumberInput) {
                context.readyScreenForNextNumber();
            }

            context.appendNumberToInput(value);
            context.awaitingNewNumberInput = false;
            context.awaitingOperator = true;
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
            context.readyScreenForNextNumber();
        }
    },
    {
        text: "C",
        class: "clear-button",
        action: function (context) {
            context.clearInputsArray();
            context.readyScreenForNextNumber();
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

            if (context.awaitingOperator) {
                context.inputsArray.push(context.input);

                context.input = context.getEvaluation();

                context.inputsArray.push(operator);
            } else {
                context.replaceCurrentOperation(operator);
            }

            context.currentOperation = operator;
            context.awaitingOperator = false;
            context.awaitingNewNumberInput = true;
        }

        return x;
    });
}

const equalsButton = {
    text: "",
    class: "fas fa-equals",
    action: function (context) {
        context.inputsArray.push(context.input);
        context.input = context.getEvaluation();

        context.emitEquationEvaluated();
        context.clearInputsArray();

        context.awaitingNewNumberInput = true;
        context.awaitingOperator = true;
    }
}

const percentButton = {
    text : "",
    class : "fas fa-percent",
    action : function(context){
        const evaluation = context.getEvaluation();
        const percentage = parseInt(context.input).toPercentage();
        const percentOfEvaluation = evaluation * percentage;
        
        context.input = percentOfEvaluation;
        context.inputsArray.push(context.input);

        context.awaitingNewNumberInput = true;
        context.awaitingOperator = true;
    }
}

export default [
    ...inputModifiers,
    ...generateNumberInputs(),
    ...generateOperationInputs(),
    equalsButton,
    percentButton
]