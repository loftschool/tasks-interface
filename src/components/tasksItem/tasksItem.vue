<template>
  <div class="tasks-item-component">
    <h2 v-if="titleIsLinked" class="title">
      <router-link :to="route">
        <span v-if="ndx">#{{ndx}}&nbsp;</span>
        <span>{{task.title}}</span>
      </router-link>
    </h2>

    <h2 v-else class="title">
      <span v-if="ndx">#{{ndx}}&nbsp;</span>
      <span>{{task.title}}</span>
    </h2>

    <div class="desc" v-html="taskDescription"></div>

    <div class="dom-result" data-title="Пример работы" v-if="task.component">
      <div class="component-wrapper">
        <component :is="task.component" />
      </div>
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
import Prism from "prismjs";
export default {
  props: {
    task: {
      type: Object,
      default: () => {},
      required: true
    },
    ndx: {
      type: Number,
      default: 0
    },
    category: {
      type: String
    },
    titleIsLinked: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    taskDescription() {
      const md = new markdownIt();
      const string = this.task.desc.trim();

      return md.render(string);
    },
    route() {
      return {
        name: "single-task",
        params: { category: this.category, alias: this.task.alias }
      };
    }
  },
  methods: {
    run() {
      eval(`alert(${this.task.result})`);
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<style lang="scss" scoped src="./tasksItem.scss"></style>