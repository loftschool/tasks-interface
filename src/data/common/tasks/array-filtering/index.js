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
  + [Арифметические операторы](https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Math#%D0%B0%D1%80%D0%B8%D1%84%D0%BC%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)
  `
};
