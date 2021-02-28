"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //non-default(required), default , optional, optional
    function Person(data) {
        this.username = data.userName;
        this.email = data.Email;
        this.color = data.Color;
    }
    Person.prototype.getUsername = function () {
        console.log(this.username);
    };
    Person.prototype.getEmail = function () {
        console.log(this.email);
    };
    Person.prototype.getColor = function () {
        console.log(this.color);
    };
    return Person;
}());
exports.Person = Person;
