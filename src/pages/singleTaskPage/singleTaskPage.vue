<template>
  <div class="single-task-page" v-if="task">
    <div class="container">
      <tasks-item :task="task" :titleIsLinked="false" />
    </div>
  </div>
</template>

<script>
import tasksItem from "../../components/tasksItem";
import data from "../../data";

export default {
  components: {
    tasksItem
  },
  methods: {
    flattenTheObject(obj) {
      return Object.keys(obj)
        .map(key => obj[key])
        .flat();
    }
  },
  computed: {
    category() {
      return this.$route.params["category"];
    },
    task() {
      const aliasUrlParam = this.$route.params["alias"];

      return this.flattenTheObject(data[this.category]).filter(
        task => task.alias === aliasUrlParam
      )[0];
    }
  },
  created() {
    if (!this.task) {
      this.$router.replace({
        name: "category",
        params: { category: this.category }
      });
    }
  }
};
</script>

<style>
</style>