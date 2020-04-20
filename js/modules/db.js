"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//定义一个操作mysql数据库的类   注意：要实现泛型接口，这个类也应该是泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.updata = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        var list = [
            {
                title: "xxx1",
                desc: "xxxxx",
                id: 1
            },
            {
                title: "xxx4",
                desc: "xxxxx",
                id: 4
            },
        ];
        return list;
    };
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
//定义一个mssql数据库的类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.updata = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        var list = [
            {
                title: "xxx1",
                desc: "xxxxx",
            },
            {
                title: "xxx4",
                desc: "xxxxx",
            },
        ];
        return list;
    };
    return MssqlDb;
}());
exports.MssqlDb = MssqlDb;
