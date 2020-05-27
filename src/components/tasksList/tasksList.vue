<template>
  <div class="tasks-component">
    <ul class="task">
      <li class="item" v-for="(item, ndx) in items" :key="item.id">
        <tasks-item v-if="componentPassed(item)" :task="item" :ndx="ndx + 1">
          <div class="component-wrapper">
            <component :is="item.component" />
          </div>
        </tasks-item>
        <tasks-item v-else :task="item" :ndx="ndx + 1" />
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
  },
  methods: {
    componentPassed(item) {
      if (Boolean(item.component) === false) return false;
      return Boolean(Object.keys(item.component).length);
    }
  }
};
</script>

<style lang="scss" scoped src="./tasksList.scss"></style>