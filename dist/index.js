"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var obj = { userName: 'ratan', Email: 'ratan@email.com', Color: 'red' };
var p = new person_1.Person(obj);
p.getUsername();
p.getEmail();
p.getColor();
//modules means take interface in separate file and use it
