module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "prismjs",
      {
        languages: ["css", "markup", "javascript"],
        plugins: ["line-numbers"],
        theme: "solarizedlight",
        css: true,
      },
    ],
  ],
};
