import {MssqlDb,MysqlDb} from '../modules/db'

class ArticleClass{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
    constructor(params:{
        title:string | undefined,
        desc:string | undefined,
        status?:number | undefined
    }){
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

var Articlelmysql = new MysqlDb<ArticleClass>();
var Articlemmsql = new MssqlDb<ArticleClass>();

export{ArticleClass,Articlelmysql,Articlemmsql}