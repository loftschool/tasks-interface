export default {
  base: [
    require("./tasks/string-filter").default,
    require("./tasks/object-selection").default,
    require("./tasks/string-analyse").default,
  ],
  extra: [
    require("./tasks/array-filter").default,
  ]
};
