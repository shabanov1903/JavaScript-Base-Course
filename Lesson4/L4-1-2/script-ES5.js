"use strict";

function Post1(author, text, date) {
    this._author = author;
    this._text = text;
    this._date = date;
}

Post1.prototype.edit = function(text) {
    this._text = text;
}

function AttachedPost1(author, text, date) {
    Post1.call(this, author, text, date);
    this._highlighted = false;
}

AttachedPost1.prototype = Object.create(Post1.prototype);
AttachedPost1.prototype.constructor = AttachedPost1;
AttachedPost1.prototype.makeTextHighlighted = function() {
    this._highlighted = true;
}

let post1 = new AttachedPost1("Danil Shabanov", "Hello World!", today());
post1.makeTextHighlighted();

console.log("Данные из ES5:");
console.log(post1);
