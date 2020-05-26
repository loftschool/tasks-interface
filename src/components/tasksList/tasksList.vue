<template>
  <div class="tasks-component">
    <ul class="task">
      <li class="item" v-for="(item, ndx) in items" :key="item.id">
        <tasks-item :task="item" :ndx="ndx + 1" />
      </li>
    </ul>
  </div>
</template>

<script>
import tasksItem from "../tasksItem";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    tasksItem
  }
};
</script>

<style lang="scss" scoped src="./tasksList.scss"></style>