export default {
  id: Math.random(),
  title: "Анализ строки",
  desc: `
    Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. Функция должна возвращать **true** или **false** в зависимости от того есть у этого файла расширение **html** или нет.
    `,
  code: `
      const path = "/users/download/index.html"

      console.log(isHtml(path))
    `,
  alert: `
    true
    `,
};
