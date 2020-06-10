import { path, result } from "./solution";
export default {
  id: Math.random(),
  title: "Анализ строки",
  alias: "string-analysing",
  desc: `
    Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать **true** или **false** в зависимости от того есть у этого файла расширение **html** или нет.
    `,
  code: `
      const path = "${path}"

      console.log(isHtml(path))
    `,
  result: `"${result}" `,
  links: `
  + [slice - извлечение подстроки](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
  `
};
