"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var ArticleClass = /** @class */ (function () {
    function ArticleClass(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleClass;
}());
exports.ArticleClass = ArticleClass;
var Articlelmysql = new db_1.MysqlDb();
exports.Articlelmysql = Articlelmysql;
var Articlemmsql = new db_1.MssqlDb();
exports.Articlemmsql = Articlemmsql;
