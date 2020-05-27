<template>
  <div class="tasks-item-component">
    <h2 class="title">#{{ndx}} {{task.title}}</h2>
    <div class="desc" v-html="taskDescription"></div>

    <div class="dom-result" v-if="$slots.default">
      <slot></slot>
    </div>

    <div class="result" v-else>
      <pre class="prism-wrapper">
        <code class="language-javascript prism-container line-numbers" data-code="1">{{task.code}} </code>
      </pre>
      <button @click="run" class="run-btn"></button>
    </div>

  </div>
</template>
<script>
import markdownIt from "markdown-it";
export default {
  props: {
    task: {
      type: Object,
      default: () => {},
      required: true
    },
    ndx: {
      type: Number,
      default: 1,
      required: true
    }
  },
  computed: {
    taskDescription() {
      const md = new markdownIt();
      const string = this.task.desc.trim();

      return md.render(string);
    }
  },
  methods: {
    run() {
      eval(`alert(${this.task.result})`);
    }
  }
};
</script>
<style lang="scss" scoped src="./tasksItem.scss"></style>