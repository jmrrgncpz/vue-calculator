<template>
  <div class="window-bar field">
    <span class="title is-marginless is-size-5">Calculator</span>
    <div class="buttons">
      <div class="button">
        <b-icon icon="window-minimize"></b-icon>
      </div>
      <div class="button">
        <b-icon icon="window-maximize"></b-icon>
      </div>
      <div class="button">
        <b-icon icon="times"></b-icon>
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