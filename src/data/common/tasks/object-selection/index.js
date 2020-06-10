import { workers, result } from "./solution";
const prettifyArray = (array) => {
  const string = JSON.stringify(array);
  return string.replace("[", "[\n\t\t").replace(/},/gi, "},\n\t\t");
};
export default {
  id: Math.random(),
  title: "Выборка объекта",
  alias: "object-selection",
  desc: `
      Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - **name** (содержащее имя сотрудника) и поле **salary** (содержащее зарплату сотрудника от 0 до 3000).
      Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции **массив** содержащий имена всех сотрудников, чья зарплата превышает **1000**.
    `,
  code: `
      const workers = ${prettifyArray(workers)};

      console.log(getWorthyWorkers(workers))
    `,
  result: `"${result}"`,
};
