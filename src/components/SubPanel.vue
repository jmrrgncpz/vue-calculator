<template>
  <div class="sub-panel flex-column">
    <div class="header">
      <span class="title is-size-4 is-marginless">History</span>
    </div>
    <div class="content history-container flex-1" v-if="!!history.length">
      <div class="history flex-column">
          <div class="equations-container flex-1">
              <history-equation v-for="equation in history" v-bind:equation="equation"></history-equation>
          </div>
          <div class="clear-button-container">
              <button class="button btn-clear-history is-pulled-right">
                <b-icon icon="trash"></b-icon>
            </button>
          </div>
      </div>
    </div>
    <div v-else>
      <strong class="is-size-7">There is no history yet</strong>
    </div>
  </div>
</template>
<script>
import historyEquation from "./HistoryEquation";
const props = {
  history: {
    type: Array,
    required: true
  }
};

const components = { historyEquation };

export default {
  props,
  components
};
</script>

<style scoped>
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
