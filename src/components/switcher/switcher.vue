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
      <!-- <li v-for="item in items" @click="$emit('changeTab')" :key="item.id">
        <label class="block">
          <input
            class="radio"
            :value="item.value"
            :checked="shouldBeChecked(item.value)"
            type="radio"
            name="option"
            @change="$emit('change', item.value)"
          />
          <div class="btn">{{item.title}}</div>
        </label>
      </li>-->
    </ul>
  </div>
</template>

<script>
const items = [
  { id: 0, title: "Общие задачи", value: "common", href: "/" },
  { id: 1, title: "Задачи по DOM", value: "dom", href: "/dom" }
];

export default {
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    modelValue: {
      default: ""
    }
  },
  data() {
    return {
      items,
      activeItemId: 0
    };
  },
  methods: {
    shouldBeChecked(value) {
      return this.modelValue === value;
    }
  }
};
</script>

<style src="./switcher.scss" lang="scss" scoped></style>
