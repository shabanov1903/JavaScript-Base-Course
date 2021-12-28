"use strict";

class NaturalNumber {
    units = 0;
    tens = 0;
    hundreds = 0;

    constructor(value)
    {
        var result = [];
        this.getUnits(value, result);
        this.hundreds = typeof(result[2]) != 'undefined' ? result[2] : 0;
        this.tens = typeof(result[1]) != 'undefined' ? result[1] : 0;
        this.units = typeof(result[0]) != 'undefined' ? result[0] : 0;
    }

    getUnits (value, mass) {
        if (value >= 0 && value <= 999 && typeof(value) == 'number')
        {
            var quotient =  (value - value % 10) / 10;
            var remainder = value % 10;
            mass.push(remainder);
            if (quotient != 0) this.getUnits(quotient, mass);
        }
        else
        {
            console.error("Введенное число не соответствует требованию 0...999");
        }
    }
}

var naturalNumber1 = new NaturalNumber(1);
var naturalNumber2 = new NaturalNumber(12);
var naturalNumber3 = new NaturalNumber(123);
var naturalNumber4 = new NaturalNumber(1234);
var naturalNumber5 = new NaturalNumber(-1);
var naturalNumber6 = new NaturalNumber("one");

console.log(naturalNumber1);
console.log(naturalNumber2);
console.log(naturalNumber3);
console.log(naturalNumber4);
console.log(naturalNumber5);
console.log(naturalNumber6);
