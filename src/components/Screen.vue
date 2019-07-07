<template>
  <div class="screen">
      <div class="expression-container has-text-right is-size-6">
        {{ expression }}
      </div>

      <div class="output-text-container has-text-right is-size-3">
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

.expression-container{
    min-height: 1.5em;
}

</style>