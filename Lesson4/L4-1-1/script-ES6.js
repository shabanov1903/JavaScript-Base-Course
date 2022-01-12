"use strict";

class Product6
{
    constructor(name, price)
    {
        this._name = name;
        this._price = price;
    }
    
    make25PercentDiscount()
    {
        this._price = 0.75 * this._price;
    }
}

let meat6 = new Product6("Мясо", 400);
let fish6 = new Product6("Рыба", 250);
let vegetables6 = new Product6("Овощи", 170);

meat6.make25PercentDiscount();
fish6.make25PercentDiscount();
vegetables6.make25PercentDiscount();

console.log("Данные из ES6:");
console.log(meat6);
console.log(fish6);
console.log(vegetables6);
