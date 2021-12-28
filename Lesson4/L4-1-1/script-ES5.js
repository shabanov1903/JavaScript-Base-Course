"use strict";

function Product5(name, price)
{
    this._name = name;
    this._price = price;
}

Product5.prototype.make25PercentDiscount = function() {
    this._price = 0.75 * this._price;
}

let meat5 = new Product5("Мясо", 400);
let fish5 = new Product5("Рыба", 250);
let vegetables5 = new Product5("Овощи", 170);

meat5.make25PercentDiscount();
fish5.make25PercentDiscount();
vegetables5.make25PercentDiscount();

console.log("Данные из ES5:");
console.log(meat5);
console.log(fish5);
console.log(vegetables5);
