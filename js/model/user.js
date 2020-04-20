"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModelmysql = new db_1.MysqlDb();
exports.UserModelmysql = UserModelmysql;
var UserModelmmsql = new db_1.MssqlDb();
exports.UserModelmmsql = UserModelmmsql;
