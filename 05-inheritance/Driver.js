"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Shape_1 = require("./Shape");
let myShape = new Shape_1.Shape(10, 5);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(15, 10, 5);
console.log(myCircle.getInfo());
