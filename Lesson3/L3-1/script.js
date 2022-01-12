"use strict";

// Функция определения четности числа и генерации строки
let CheckAndPrint = (n) => {
    if (n == 0) return `${n} - это ноль`;
    if (n % 2 == 0) return `${n} - четное число`;
    if (n % 2 != 0) return `${n} - нечетное число`;
}

let number = +prompt("Введите число элементов:");

for (let i = 0; i < number + 1; i++)
{
    console.log(CheckAndPrint(i));
}
