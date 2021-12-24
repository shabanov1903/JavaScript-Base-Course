"use strict";

// Сумма скидки сегодня
let discount = 0.15;

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// Вывод нового массива (старый остался без изменений)
console.log(products.map((element) => {
    return {
        id: element.id,
        price: (1-discount) * element.price
    }
}))
