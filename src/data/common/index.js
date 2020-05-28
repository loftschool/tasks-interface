export default {
  base: [
    require("./tasks/string-filtering/index").default,
    require("./tasks/object-selection/index").default,
    require("./tasks/string-analysing/index").default,
  ],
  extra: [
    require("./tasks/array-filtering/index").default,
  ]
};
