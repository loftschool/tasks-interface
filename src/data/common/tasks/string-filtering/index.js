import { string, result } from "./solution";
export default {
  id: Math.random(),
  alias: "string-filtering",
  title: "Фильтрация строки",
  desc: `
      Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из **ГЛАСНЫХ** букв этой строки. Результат вывести в консоль.
    `,
  code: `
      const string = "${string}";

      console.log(getVowels(string));
    `,
  result: `"${result}"`,
  links: ` 
  + [indexOf - поиск индекса элемента](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
  + [toLowerCase - приведение к нижнему регистру](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  + [includes - проверка на присутсвие символа](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
  `,
};
