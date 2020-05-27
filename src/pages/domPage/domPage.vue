<template>
  <div class="common-page-component">
    <div class="container">
      <tasks-list class="list" :items="items.base" />
    </div>
    <divider title="Дополнительные задания" />
    <div class="container">
      <tasks-list class="list" :items="items.extra" />
    </div>
  </div>
</template>

<script>
import tasksList from "../../components/tasksList";
import divider from "../../components/divider";
import items from "../../data/dom";
import Prism from "prismjs";

export default {
  components: {
    tasksList,
    divider
  },
  data() {
    return {
      items
    };
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style>
</style>