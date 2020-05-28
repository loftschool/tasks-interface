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
};
