
    interface DBI<T>{
        add(info:T):boolean;
        updata(info:T,id:number):boolean;
        delete(id:number):boolean;
        get(id:number):any[];
    }


//定义一个操作mysql数据库的类   注意：要实现泛型接口，这个类也应该是泛型类

export class MysqlDb<T> implements DBI<T>{
        add(info: T): boolean {
            console.log(info);
            return true;
        }
        updata(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            var list = [
                {
                    title:"xxx1",
                    desc:"xxxxx",
                    id:1
                },
                {
                    title:"xxx4",
                    desc:"xxxxx",
                    id:4
                },
            ]
            return list
        }
    }


//定义一个mssql数据库的类

export class MssqlDb<T> implements DBI<T>{
        add(info: T): boolean {
            throw new Error("Method not implemented.");
        }
        updata(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            var list = [
                {
                    title:"xxx1",
                    desc:"xxxxx",
                },
                {
                    title:"xxx4",
                    desc:"xxxxx",
                },
            ]
            return list
        }
    }


