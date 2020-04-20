import {MssqlDb,MysqlDb} from '../modules/db'

class UserClass{
    username:string | undefined;
    password:string | undefined;
}

var UserModelmysql = new MysqlDb<UserClass>();
var UserModelmmsql = new MssqlDb<UserClass>();

export {UserClass,UserModelmysql,UserModelmmsql}
