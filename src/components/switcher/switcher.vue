<template>
  <div class="switcher-component">
    <ul class="tasks">
      <li v-for="item in items" :key="item.id">
        <router-link
          :to="item.href"
          class="btn"
          active-class="active"
          tag="button"
          exact
        >{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
const items = [
  { id: 0, title: "Общие задачи", value: "common", href: "/common" },
  { id: 1, title: "Задачи по DOM", value: "dom", href: "/dom" }
];

export default {
  data() {
    return {
      items
    };
  }
};
</script>

<style src="./switcher.scss" lang="scss" scoped></style>
