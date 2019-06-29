const createNumberInput = function(value){
    return {
        text : value.toString(),
        class : "number-input",
        action: function (context) {
            if(context.inputHasTransformed){
                context.inputsArray.pop();
            }

            if (context.awaitingNewNumberInput) {
                context.readyScreenForNextNumber();
                context.awaitingNewNumberInput = false;
            }

            context.appendNumberToInput(value);
            context.awaitingOperator = true;
        },
    }
}

export { createNumberInput };
