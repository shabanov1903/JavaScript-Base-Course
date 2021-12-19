"use strict";

let summa = prompt("Введите сумму зачисления");

function rublesCase(value)
{
    let last = value.slice(-1);
    switch (last)
    {
        case '1': return "рубль";
        case '2':
        case '3':
        case '4': return "рубля";
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0': return "рублей";
        default: undefined;
    }
}

function response(value)
{
    if (rublesCase(value) != undefined) return ("Ваша сумма в " + value + ` ${rublesCase(value)} ` + "успешно зачислена.")
    else return "Неверный ввод!"
}

alert(response(summa));