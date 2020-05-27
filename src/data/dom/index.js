export default {
  base: [
    require("./tasks/simple-slider/index").default,
    require("./tasks/simple-overlay/index").default,
  ],
  extra: [require("./tasks/blocks-coloring/index").default],
};
