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
import data from "../../data";

export default {
  components: {
    tasksList,
    divider
  },
  computed: {
    items() {
      const category = this.$route.params["category"];
      return data[category];
    }
  },
  watch: {
    items() {}
  }
};
</script>
