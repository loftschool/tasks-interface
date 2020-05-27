<template>
  <div class="tasks-page-component">
    <div class="container">
      <h1 class="page-title">Задачи по Javascript</h1>
      <switcher class="switcher" />
    </div>
    <router-view />
  </div>
</template>

<script>
import switcher from "../../components/switcher";

export default {
  components: {
    switcher
  },
  created() {
    this.$router.replace("/common");
  }
};
</script>

<style>
</style>