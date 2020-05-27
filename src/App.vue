<template>
  <div class="wrapper">
    <div class="maincontent">
      <router-view />
    </div>
  </div>
</template>

<script>
import "normalize.css";

export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

body,
html {
  height: 100%;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  line-height: 1.42;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.switcher {
  margin-bottom: 57px;
}

.wrapper {
  min-height: 100%;
  background: #fafafa;
  overflow: hidden;
}

.maincontent {
  padding: 60px 0;
}

.container {
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  margin-bottom: 55px;
  line-height: 1;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

button {
  cursor: pointer;
  border: none;
}
</style>
