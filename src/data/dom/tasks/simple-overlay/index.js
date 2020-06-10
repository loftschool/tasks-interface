import result from "./simpleOverlaySolution.vue";

export default {
  id: Math.random(),
  title: "Модальное окно",
  alias: "simple-overlay",
  desc: `
    На странице создан произвольный контент и кнопка вызова модального окна. По нажатию нужно отобразить **оверлей** (блок с затемнением) и **модальное окно** по середине экрана. Разметка внутри оверлея должа быть создана при помощи **javaScript**. Закрыть модальное окно можно нажатием на кнопку **закрыть** либо по клику вне области модального окна.
    `,
  component: result,
  links: `
  + [createElement - создание DOM-элемента](https://developer.mozilla.org/ru/docs/DOM/document.createElement)
  + [classList - работа с классами](https://developer.mozilla.org/ru/docs/Web/API/Element/classList)
  + [innerHTML - работа с HTML элемента](https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML)
  + [appendChild - добавление элемента](https://developer.mozilla.org/ru/docs/Web/API/Node/appendChild)
  + [removeChild - удаление элемента](https://developer.mozilla.org/ru/docs/Web/API/Node/removeChild)

  `
};
