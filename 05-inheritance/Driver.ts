import { Circle } from "./Circle";
import { Shape } from "./Shape";

let myShape = new Shape(10,5);
console.log(myShape.getInfo());

let myCircle = new Circle(15, 10, 5);
console.log(myCircle.getInfo())