import result from "./simpleSliderSolution.vue";

export default {
  id: Math.random(),
  title: "Простой слайдер",
  alias: "simple-slider",
  desc: `
    Это простейший слайдер элементов. При клике на правую стрелочку, элементы должны сдвигаться вправо. При клике на левую стрелочку, элементы должны сдвигаться влево.
    `,
  component: result,
};
