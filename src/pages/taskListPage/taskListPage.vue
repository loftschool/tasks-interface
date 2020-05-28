<template>
  <div class="common-page-component">
    <div class="container">
      <tasks-list :category="category" class="list" :items="items.base" />
    </div>
    <divider title="Дополнительные задания" />
    <div class="container">
      <tasks-list :category="category" class="list" :items="items.extra" />
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
    category() {
      return this.$route.params["category"];
    },
    items() {
      return data[this.category];
    }
  },
  created() {
    if (Boolean(this.items) === false) {
      this.$router.replace("/common");
    }
  }
};
</script>
