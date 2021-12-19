"use strict";

/**
 * Функция суммирования
 * @param {number} a Первое слагаемое
 * @param {number} b Второе слагаемое
 * @returns Результат сложения
 */
 let sum = (a, b) => a + b;

 /**
  * 
  * @param {number} a Уменьшаемый элемент
  * @param {number} b Вычитаемый параметр
  * @returns Результат вычитания
  */
 let dif = (a, b) => a - b;
 
 /**
  * 
  * @param {number} a Первый множитель
  * @param {number} b Второй множитель
  * @returns Результат умножения
  */
 let mult = (a, b) => a * b;
 
 /**
  * 
  * @param {*} a Делимое
  * @param {*} b Делитель
  * @returns Частное
  */
 let divs = (a, b) => a / b;

/**
 * Универсальная функция оперирования
 * @param {number} arg1 Число 1
 * @param {number} arg2 Число 2
 * @param {string} operation Наименование операции: sum, dif, mult, divs
 */
function mathOperation(arg1, arg2, operation)
{
    switch (operation)
    {
        case "sum": return sum(arg1, arg2);
        case "dif": return dif(arg1, arg2);
        case "mult": return mult(arg1, arg2);
        case "divs": return divs(arg1, arg2);
        default: return NaN;
    }
}

alert("Сумма чисел 100 и 10 равна: " + mathOperation(100, 10, "sum"));
alert("Разность чисел 100 и 10 равна: " + mathOperation(100, 10, "dif"));
alert("Произведение чисел 100 на 10 равно: " + mathOperation(100, 10, "mult"));
alert("Деление чисел 100 на 10 равно: " + mathOperation(100, 10, "divs"));
alert(mathOperation(100, 10, "any"));