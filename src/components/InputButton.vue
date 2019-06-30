<template>
  <div class="input-button has-text-centered is-size-4">{{ text }}</div>
</template>
<script>
const props = {
  text: {
    type: String,
    required: true
  },
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
</style>