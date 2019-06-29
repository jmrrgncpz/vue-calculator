import operationInputs from "./operationInputs";
import inputModifiers from "./input-modifiers"
import numberInputs from "./numberInputs";
import { createNumberInput } from "./numberInputFactory";

const dot = {
    ...createNumberInput("."),
    style : {
        'grid-row' : 6,
        'grid-column' : 3,
    }
}

const equalsButton = {
    text: "=",
    // class: "fas fa-equals",
    action: function (context) {
        context.appendInputToInputs();
        context.input = context.getEvaluation();

        context.emitEquationEvaluated();
        context.clearInputsArray();

        context.awaitingNewNumberInput = true;
        context.awaitingOperator = true;
    },
    style : {
        'grid-row' : 6,
        'grid-column' : 4
    }
}

const percentButton = {
    text : "%",
    // class : "fas fa-percent",
    action : function(context){
        const evaluation = !context.inputsArray.length ? 0 : context.getEvaluation();
        const percentage = parseInt(context.input).toPercentage();
        const percentOfEvaluation = evaluation * percentage;
        
        context.input = percentOfEvaluation;
        context.appendInputToInputs();

        context.awaitingNewNumberInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 1
    }
}

const rootButton = {
    text : "√",
    // class: "fas fa-square-root-alt",
    action : function(context){
        const value = Math.sqrt(context.input);
        context.appendExpressionToInputs(`√(${context.input})`, value);
        context.input = value;

        context.awaitingNewNumberInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 2
    }
}

const squareButton = {
    text : "x²",
    class : "",
    action : function(context){
        const value = context.input*context.input;
        context.appendExpressionToInputs(`sqr(${context.input})`, value);
        context.input = value;

        context.awaitingNewNumberInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 3
    }
}

const divideFrom1 = {
    text : "1/x",
    class : "",
    action : function(context){
        if(context.input == 0){
            context.appendExpressionToInputs("1/(0)", 0);
            context.input = "Cannot divide by zero"
            return;
        }

        const value = (1 / context.input);
        context.appendExpressionToInputs(`1/(${context.input})`, value);
        context.input = value;

        context.awaitingNewNumberInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 4
    }
}

const negate = {
    text : "±",
    class : "",
    action : function(context){
        if(context.input == 0) return;

        context.input = -(context.input);
    },
    style : {
        'grid-row' : 6,
        'grid-column' : 1
    }
}





export default [
    ...inputModifiers,
    ...numberInputs,
    ...operationInputs,
    equalsButton,
    percentButton,
    rootButton,
    squareButton,
    negate,
    divideFrom1,
    dot
]