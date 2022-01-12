"use strict";

let a = +prompt("Введите первое число:");
let b = +prompt("Введите второе число:");

if (a >= 0 && b >= 0) {
    alert(a - b);
}
else if (a < 0 && b < 0) {
    alert(a * b);
}
else {
    alert(a + b);
}