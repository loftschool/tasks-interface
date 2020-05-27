export default {
  base: [
    require("./tasks/string-filtering/index").default,
    require("./tasks/object-selection/index").default,
    require("./tasks/string-analyse/index").default,
  ],
  extra: [
    require("./tasks/array-filtering/index").default,
  ]
};
