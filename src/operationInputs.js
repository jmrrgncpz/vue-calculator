const generateOperationInputs = function () {
    const x = [
        {
            text: "+",
            // class: "fas fa-plus",
            value: "+",
            style : {
                'grid-row' : 5,
                'grid-column' : 4
            }
        },
        {
            text: "−",
            // class: "fas fa-minus",
            value: "-",
            style : {
                'grid-row' : 4,
                'grid-column' : 4
            }
        },
        {
            text: "×",
            // class: "fas fa-times",
            value: "*",
            style : {
                'grid-row' : 3,
                'grid-column' : 4
            }
        },
        {
            text: "÷",
            // class: "fas fa-divide",
            value: "/",
            style : {
                'grid-row' : 2,
                'grid-column' : 4
            }
        }
    ]

    return x.map(x => {
        x.action = function (context) {
            const operator = x.value;

            if(context.inputHasTransformed){
                context.input = context.getEvaluation();
                
                context.inputHasTransformed = false;
            }
            else if (context.awaitingOperator) {
                context.appendInputToInputs();
                context.input = context.getEvaluation();

                context.awaitingOperator = false;
            }
            else {
                context.inputsArray.pop();
            }

            context.appendExpressionToInputs(x.text, x.value);

            context.currentOperation = operator;
            context.awaitingNewNumberInput = true;
        }

        return x;
    });
}

export default generateOperationInputs();