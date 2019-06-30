<template>
  <div class="window-bar field">
    <span class="title is-marginless  is-size-6">Calculator</span>
    <div class="buttons">
      <div class="button">
        <b-icon icon="window-minimize is-size-6"></b-icon>
      </div>
      <div class="button">
        <b-icon icon="window-maximize is-size-6"></b-icon>
      </div>
      <div class="button">
        <b-icon icon="times is-size-6"></b-icon>
      </div>
    </div>
  </div>
</template>
<style scoped>
.window-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>