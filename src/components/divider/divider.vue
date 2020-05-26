<template>
  <div class="divider-component">
    <div class="container divider-container">
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true
    }
  }
};
</script>

<style scoped lang="scss" src="./divider.scss">
</style>