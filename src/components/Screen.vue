<template>
  <div class="screen">
      <div class="expression-container is-size-5">
          {{ expression }}
      </div>

      <div class="output-text-container is-size-3">
          {{ input }}
      </div>
  </div>
</template>
<script>
const props = {
    inputs : {
        type : Array,
        required : true
    },
    input : {
        type : [Number, String],
        required : true,
    }
}

const computed = {
    expression : function(){
        return this.inputs.reduce((acc, curr) => `${acc} ${curr.text} `, "");
    }
}

export default {
    props,
    computed
}
</script>
<style scoped>
.screen{
    border-bottom: 1px solid white;
}

.screen > *{
    display: flex;
    justify-content: flex-end;
    padding: 5px;
}

</style>