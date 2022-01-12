"use strict";

class Post2 {
    constructor(author, text, date)
    {
        this._author = author;
        this._text = text;
        this._date = date;
    }

    edit(text)
    {
        this._text = text;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date)
    {
        super(author, text, date);
        this._highlighted = false;
    }
    makeTextHighlighted() {
        this._highlighted = true;
    }
}

let post2 = new AttachedPost2("Danil Shabanov", "Hello World!", today());
post2.makeTextHighlighted();

console.log("Данные из ES6:");
console.log(post2);
