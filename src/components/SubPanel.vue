<template>
  <div class="sub-panel">
      <div class="header">
          <span class="title is-size-4 is-marginless">History</span>
      </div>
      <div class="content history-container">
          <div class="equation" v-for="equation in history">
              {{ equation.result }}
          </div>
      </div>
  </div>
</template>
<script>
const props = {
    history : {
        type : Array,
        required : true
    }
}

export default {
    props
}
</script>

<style scoped>
.sub-panel{
    flex-grow: 1;
    min-width: 39%;
    /* max-width: 39%; */
}
</style>
