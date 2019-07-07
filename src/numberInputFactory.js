const createNumberInput = function(value){
    return {
        text : value.toString(),
        class : "number-input",
        action: function (context) {
            if(context.inputHasTransformed){
                context.inputsArray.pop();
            }

            if (context.newNumberInputReplacesCurrentInput) {
                context.readyScreenForNextNumber();
                context.newNumberInputReplacesCurrentInput = false;
            }

            context.appendNumberToInput(value);
            context.awaitingOperator = true;
            context.equationHasJustEvaluated = false;
            context.inputHasTransformed = false;
        },
    }
}

export { createNumberInput };
