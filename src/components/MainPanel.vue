<template>
<div class="panels">
<div class="main-panel">
    <div class="header">
      <button class="button">
        <b-icon icon="bars"></b-icon>
      </button>
      <span class="title is-marginless is-size-4">Standard</span>
    </div>
    <div class="content">
      <screen
        class="field"
        v-bind:inputs="inputsArray"
        v-bind:input="input">
      </screen>
      <div class="input-buttons-container">
        <input-button
          v-for="(inputButton, i) in inputButtonsData"
          v-bind:key="`inputButton-${i}`"
          v-bind:text="inputButton.text"
          v-bind:class="inputButton.class"
          v-bind:style="inputButton.style"
          v-on:click.native="executeButtonAction(inputButton.action)"
        ></input-button>
      </div>
    </div>
  </div>
  <div class="sub-panel flex-column">
    <div class="header">
      <span class="title is-size-4 is-marginless">History</span>
    </div>
    <div class="content history-container flex-1" v-if="!!history.length">
      <div class="history flex-column">
          <div class="equations-container flex-1">
              <history-equation 
                v-for="equation in history" 
                v-bind:equation="equation"
                v-on:click.native="setEquationToScreen(equation)"
                >
              </history-equation>
          </div>
          <div class="clear-button-container">
              <button v-on:click="$emit('clear-btn-clicked')" class="button btn-clear-history is-pulled-right">
                <b-icon icon="trash"></b-icon>
            </button>
          </div>
      </div>
    </div>
    <div v-else>
      <strong class="is-size-7">There's no history yet</strong>
    </div>
  </div>
</div>
</template>
<script>
import screen from "@/components/Screen";
import inputButton from "@/components/InputButton";
import historyEquation from "./HistoryEquation";

import inputButtonsData from "@/input-buttons-data";

const components = {
  screen,
  inputButton,
  historyEquation
};

const data = function() {
  return {
    inputsArray: [],
    input : 0,
    inputButtonsData,
    currentOperation : null,
    newNumberInputReplacesCurrentInput : true,
    awaitingOperator : true,
    inputHasTransformed : false,
    equationHasJustEvaluated : false,
    lastOperation : "",
    history : []
  };
};

const methods = {
  appendInputToInputs : function(){
    this.appendExpressionToInputs(this.input);
  },
  appendExpressionToInputs : function(text, expression){

    this.inputsArray.push({
      text,
      expression : expression || text
    });
  },
  executeButtonAction: function(action) {
    action(this);
  },
  readyScreenForNextNumber : function(){
    this.input = 0;
  },
  clearInputsArray : function(){
    this.inputsArray = [];
  },
  getEvaluation : function(arr){
    let x = arr || this.inputsArray;
    let inputsArray = x.map(input => input.expression.toString());

    while (inputsArray.length >= 3) {
      const expression = inputsArray
                          .splice(0, 3)
                          .reduce((acc, curr) => `${acc}${curr}`, "");
      inputsArray = [`(${expression})`, ...inputsArray]
    }

    return eval(inputsArray[0]);
  },
  appendNumberToInput : function(number){
    if(this.input == 0) this.input = number;
    else return this.input += number.toString();
  },
  resetFlags : function(){
    this.awaitingOperator = true;
    this.newNumberInputReplacesCurrentInput = true;
    this.inputHasTransformed = false;
    this.equationHasJustEvaluated = false;
  },
  addEquationToHistory : function(){
    const equation = {
        inputsArray : this.inputsArray,
        result : this.input
    }

    this.history.unshift(equation);
  },
  clearHistory : function(){
    this.history = [];
  },
  setEquationToScreen : function({ inputsArray, result }){
    this.awaitingOperator = true;
    this.newNumberInputReplacesCurrentInput = true;
    this.inputHasTransformed = true;
    this.equationHasJustEvaluated = false;
    this.lastOperation = "";

    this.inputsArray = inputsArray.slice();
    this.input = result;

    this.currentOperation = this.inputsArray.length < 2 ? null : this.inputsArray[this.inputsArray.length - 2].text;
  }
};

export default {
  components,
  data,
  methods,
};
</script>

<style scoped>
.header .button {
  margin-right: 10px;
}

.main-panel {
  flex-grow: 1.6;
  margin-right: 10px;
}

.input-buttons-container{
  display : grid;
  grid-template-columns: repeat(4, 1fr);
  
}
.content {
  display: flex;
  flex-direction: column;
}



.panels{
  display: flex;
  justify-content: space-between;
}


.sub-panel {
  flex-grow: 1;
  min-width: 39%;
  max-width: 39%;
}

.history-container {
  position: relative;
}

.history{
    position : absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.equations-container{
    overflow: auto;
}

::-webkit-scrollbar{
    width: 2px;
    background: transparent;
}

::-webkit-scrollbar-thumb{
    width : 2px;
    background: rgba(255,255,255, 0.5);
}
</style>