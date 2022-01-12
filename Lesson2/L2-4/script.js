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

alert("Сумма 100 и 10 равна " + sum(100,10));
alert("Разность 100 и 10 равна " + dif(100,10));
alert("Умножение 100 на 10 равно " + mult(100,10));
alert("Деление 100 на 10 равно " + divs(100,10));