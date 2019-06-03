<template>
  <div class="input-button has-text-centered is-size-4">{{ text }}</div>
</template>
<script>
const props = {
  text: {
    type: String,
    required: true
  }
};

export default {
  props
};
</script>
<style>
.input-button {
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-basis : 25%;
}

.input-button:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>