let _ = require('lodash');

let arr1 = new Array(10);
let arr2 = new Array();
let arr3 = Array();

console.log(arr1);
console.log(arr2);
console.log(arr3);

let str1 = "my String";
let str2 = new String("some String object");
console.log(str1);
console.log(str2.toString());

let fun = new Function("x", "y", "return x + y;");

console.log(fun(1, 5));

console.log(typeof(fun));

function Point(x, y) {
    this.x = y;
    this.y = y;
}

let p1 = new Point(10, 20);
let p2 = new Point(10, 20);
let p3 = new Point(10, 10);

console.log(_.isEqual(p1, p2));

let Friend = function(mood) {
    this.mood = mood;

    // if nice
    if (mood === 'nice') {
        this.talk = () => {
            console.log("don't wanna talk with you.");
        }
    } else {
        this.talk = () => {
            console.log("gtfo");
        }
    }
}

let joe = new Friend("nice1");
joe.talk();

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}

let rect = new Rectangle(100, 50);
console.log(rect.getArea());