import result from "./blocksColoringSolution.vue";

export default {
  id: Math.random(),
  title: "Создание и работа с DOM",
  alias: "blocks-coloring",
  desc: `
    При изменении поля **number** создаются одинаковые блоки (**div**) внутри которых расположено число обозначающее их порядковый номер (начиная с 1).
    При изменении поля **color** эти блоки перекрашиваются в цвет выбранный в этом поле. При первом изменении поля **color** закрашиваются блоки с нечетными номерами (1, 3, 5, 7...), при втором изменении поля, окрашиваются блоки с четными (2, 4, 6, 8...), при третьем снова нечетные и т.д.
    `,
  component: result,
  links: `
  + [outerHTML - разметка элемента](https://developer.mozilla.org/ru/docs/Web/API/Element/outerHTML)
  + [тернарный оператор](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80)
  `
};
