"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// Вывод нового массива данных с изображениями (старый остался без изменений)
console.log(products.filter((element) => {
    return element.hasOwnProperty('photos') && (element.photos.length != 0);
}))

// Вывод нового массива отсортированных по цене данных (старый остался без изменений)
console.log(products.sort((elementa, elementb) => {
    if (elementa.price > elementb.price) return 1;
    if (elementa.price < elementb.price) return -1;
    return 0;
}))
