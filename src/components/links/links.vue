<template>
  <div class="links-component">
    <h3 class="title">Полезные ссылки</h3>
    <div class="links" v-html="renderedLinks"></div>
  </div> 
</template>

<script>

import markdownIt from "markdown-it";
export default {
  props: {
    links: String
  },
  computed: {
    renderedLinks() {
      const md = new markdownIt();
      const string = this.links;

      return md.render(string);
    },
  }
}
</script>

<style lang="scss">
  .links-component {
    background: #fff;
    padding: 30px 40px; 
    margin-top: 20px;
  }

  .links ul {
    list-style: disc inside;
    margin-bottom: 7px;

    li {
      margin-bottom: 7px;
    }

    a {
      color: #9e91e3;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .title {
    margin-bottom: 10px;
  }
</style>