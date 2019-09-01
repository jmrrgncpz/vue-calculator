import operationInputs from "./operationInputs";
import inputModifiers from "./input-modifiers"
import numberInputs from "./numberInputs";
import { createNumberInput } from "./numberInputFactory";

const dot = {
    ...createNumberInput("."),
    style : {
        'grid-row' : 6,
        'grid-column' : 3,
    },
    isDisabledWhenCannotDivideByZeroIsActive: true
}

const equalsButton = {
    text: "=",
    // class: "fas fa-equals",
    action: function (context) {
        if(!context.inputHasTransformed){
            context.appendInputToInputs();
        } 

        if(context.equationHasJustEvaluated && context.lastOperation.length >= 2){
            context.inputsArray = context.inputsArray.concat(context.lastOperation);
        }else{
            context.lastOperation = context.inputsArray.slice(-2);
        }

        context.input = context.getEvaluation();

        context.addEquationToHistory();
        context.clearInputsArray();



        context.newNumberInputReplacesCurrentInput = true;
        context.awaitingOperator = true;
        context.equationHasJustEvaluated = true;
        context.inputHasTransformed = false;
    },
    style : {
        'grid-row' : 6,
        'grid-column' : 4
    },
}

const percentButton = {
    text : "%",
    // class : "fas fa-percent",
    action : function(context){
        if(context.inputsArray.length < 2){
            context.input = 0;
        }else if(context.inputHasTransformed){
            const toTransform = context.inputsArray[context.inputsArray.length - 1].expression;

            if(context.currentOperation == "+" || context.currentOperation == "-"){
                let arr = context.inputsArray.slice(0, -2);
                const evaluation = context.getEvaluation(arr);
                const percentage = parseFloat(toTransform).toPercentage();
                const percentOfEvaluation = evaluation * percentage;
                context.input = percentOfEvaluation;
            }else{
                context.input = parseFloat(toTransform).toPercentage();
            }

            context.inputsArray.pop();
        }else{
            if(context.currentOperation == "+" || context.currentOperation == "-"){
                const evaluation = context.getEvaluation();
                const percentage = parseFloat(context.input).toPercentage();
                const percentOfEvaluation = evaluation * percentage;
                context.input = percentOfEvaluation;
            }else{
                context.input = parseFloat(context.input).toPercentage();
            }
        }
        
        context.appendInputToInputs();

        context.newNumberInputReplacesCurrentInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
        context.equationHasJustEvaluated = false;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 1
    },
    isDisabledWhenCannotDivideByZeroIsActive: true
}

const rootButton = {
    text : "√",
    // class: "fas fa-square-root-alt",
    action : function(context){
        const value = Math.sqrt(context.input);
        context.appendExpressionToInputs(`√(${context.input})`, value);
        context.input = value;

        context.newNumberInputReplacesCurrentInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
        context.equationHasJustEvaluated = false;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 2
    },
    isDisabledWhenCannotDivideByZeroIsActive: true
}

const squareButton = {
    text : "x²",
    class : "",
    action : function(context){
        const value = context.input*context.input;
        context.appendExpressionToInputs(`sqr(${context.input})`, value);
        context.input = value;

        context.newNumberInputReplacesCurrentInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
        context.equationHasJustEvaluated = false;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 3
    },
    isDisabledWhenCannotDivideByZeroIsActive: true
}

const divideFrom1 = {
    text : "1/x",
    class : "",
    action : function(context){
        if(context.input == 0){
            context.appendExpressionToInputs("1/(0)", 0);
            context.input = "Cannot divide by zero"

            context.cannotDivideByZeroIsActive = true;
            return;
        }

        const value = (1 / context.input);
        context.appendExpressionToInputs(`1/(${context.input})`, value);
        context.input = value;

        context.newNumberInputReplacesCurrentInput = true;
        context.awaitingOperator = true;
        context.inputHasTransformed = true;
        context.equationHasJustEvaluated = false;
    },
    style : {
        'grid-row' : 1,
        'grid-column' : 4
    },
    isDisabledWhenCannotDivideByZeroIsActive: true
}

const negate = {
    text : "±",
    class : "",
    action : function(context){
        if(context.input == 0) return;
        if(context.inputHasTransformed){
            
        }else{
            context.input = -(context.input);
        }
    },
    style : {
        'grid-row' : 6,
        'grid-column' : 1
    },
    isDisabledWhenCannotDivideByZeroIsActive: true
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