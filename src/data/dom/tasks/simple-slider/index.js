import result from "./simpleSliderSolution.vue";

export default {
  id: Math.random(),
  title: "Простой слайдер",
  alias: "simple-slider",
  desc: `
    Это простейший слайдер элементов. При клике на правую стрелочку, элементы должны сдвигаться вправо. При клике на левую стрелочку, элементы должны сдвигаться влево.
    `,
  component: result,
  links: `
  + [getComputedStyles - получение объекта стилей](https://developer.mozilla.org/ru/docs/Web/API/Window/getComputedStyle)
  + [parseInt - приведение строки к числу](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
  `
};