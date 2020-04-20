"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hj;
(function (Hj) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "吃骨头");
        };
        return Dog;
    }());
    Hj.Dog = Dog;
})(Hj = exports.Hj || (exports.Hj = {}));
