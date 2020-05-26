<template>
  <div class="tasks-page-component">
    <div class="container">
      <h1 class="page-title">Задачи по Javascript</h1>
      <switcher class="switcher" v-model="picked" />
      <tasks-list class="list" :items="items.base" />
    </div>
    <divider title="Дополнительные задания" />
    <div class="container">
      <tasks-list class="list" :items="items.extra" />
    </div>
  </div>
</template>

<script>
import switcher from "../../components/switcher";
import tasksList from "../../components/tasksList";
import divider from "../../components/divider";
import items from "../../data/common";

export default {
  components: {
    switcher,
    tasksList,
    divider
  },
  data() {
    return {
      picked: "common",
      items
    };
  }
};
</script>

<style>
</style>