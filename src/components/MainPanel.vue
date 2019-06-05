<template>
  <div class="main-panel">
    <div class="header">
      <button class="button">
        <b-icon icon="bars"></b-icon>
      </button>
      <span class="title is-marginless is-size-4">Standard</span>
    </div>
    <div class="content">
      <screen class="field" v-bind:inputs="inputsArray" v-bind:input="input"></screen>
      <div class="input-buttons-container">
        <input-button
          v-for="inputButton in inputButtonsData"
          v-bind:text="inputButton.text"
          v-bind:class="inputButton.class"
          v-on:click.native="triggerButton(inputButton.action)"
        ></input-button>
      </div>
    </div>
  </div>
</template>
<script>
import screen from "@/components/Screen";
import inputButton from "@/components/InputButton";

import inputButtonsData from "@/input-buttons-data";

const components = {
  screen,
  inputButton
};

const data = function() {
  return {
    inputsArray: [],
    input : 0,
    inputButtonsData,
    currentOperation : null,
    anEquationIsJustEvaluated : false
  };
};

const methods = {
  triggerButton: function(action) {
    action(this);
  }
};

const computed = {
}

export default {
  components,
  data,
  methods,
  computed
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
    display : flex;
    flex-wrap: wrap;
}
.content {
  display: flex;
  flex-direction: column;
}
</style>