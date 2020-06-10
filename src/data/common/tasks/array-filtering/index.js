import { mixedArray, result } from "./solution";
export default {
  id: Math.random(),
  title: "Фильтрация массива",
  alias: "array-filtering",
  desc: `
    Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет.
    Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только **четные** числа. Результат выведите в консоль.
    `,
  code: `
      const mixedArray = ${JSON.stringify(mixedArray)};
      const isEven = num => { /* code */ };

      console.log(filterArray(mixedArray, isEven));
    `,
  result: `
    "${result}"
    `,
  links: `
  + [Остаток от деления](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)
  `
};
