"use strict";

// Способ 1
for (
    let i = 0;
    i < 10;
    console.log(i++)
) { }

// Способ 2
for (
    let i = 0;
    iterator(i);
    i++
) { }

function iterator(i) {
    if (i < 10)
    {
        console.log(i);
        return true;
    }
    else return false;
}
