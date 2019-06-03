<template>
  <div class="screen">
      <div class="expression-container is-size-5">
          {{ expression }}
      </div>

      <div class="output-text-container is-size-3">
          {{ value }}
      </div>
  </div>
</template>
<script>
const props = {
    expression : {
        type : String,
    }
}

const computed = {
    value : function(){
        if(!this.expression) return 0;

        return eval(this.expression);
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