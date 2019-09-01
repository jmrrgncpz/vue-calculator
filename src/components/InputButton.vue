<template>
  <div class="input-button has-text-centered is-size-4" v-bind:disabled="cannotDivideByZeroIsActive && isDisabledWhenCannotDivideByZeroIsActive">{{ text }}</div>
</template>
<script>
const props = {
  text: {
    type: String,
    required: true
  },
  cannotDivideByZeroIsActive :{
    type : Boolean,
    required : true
  },
  isDisabledWhenCannotDivideByZeroIsActive : {
    type : Boolean ,
    required : false,
    default : false
  }
};

export default {
  props
};
</script>
<style>
.input-button {
  user-select: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-basis : 25%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor : pointer;
}

.input-button:hover {
  background: lavender;
}

[disabled]{
  cursor : not-allowed;
  color : gray;
  background: transparent !important;
}

[disabled]:hover{
  background: transparent !important;
}
</style>