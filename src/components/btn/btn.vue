<template>
  <button class="btn-component">{{title}}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
