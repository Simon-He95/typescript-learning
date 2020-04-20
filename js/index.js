"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('你好ts');
var str = "你好ts";
/*
vscode配置自动编译

1.第一步 tsc --int 生成tsconfig.json ，修改"outDir" : "./js",

2.第二步 任务/终端 - 运行任务 监视tsconfig.json

typeScript中得数据类型
    布尔类型（boolean）
    数字类型（number）
    字符串类型（string）
    数组类型（array）
    元组类型（tuple）
    枚举类型（enum）

    任意类型（any）
    null 和 undefined
    void类型
    never类型

 */
// 布尔类型（boolean）
// 在ts中必须指定类型
//     var flag:boolean = true;
var flag = true;
flag = false;
console.log(flag);
// 数组类型（array）
/*
var arr:Array<number> = [11,22,33]
var arr2:any[] =[11,"22",false]
console.log(arr)
console.log(arr2)
*/
// 元组类型（tuple）
var arr1 = [11, "22"];
// 枚举类型（enum）
//     enum 枚举名{
//         标识符[=整型类型]，
//         标识符[=整型类型]，
//         ...
//         标识符[=整型类型]，
//     };
//         enum Flag{
//             success = 1,    //如果标识符没有赋值，则返回该值的下标
//             error =2
//         };
//         let s:Flag = Flag.success;
//         console.log(s); //1
// function getInfo(name:string,age?:number):string{
//     if(age){
//         return `我的名字是${name},我的年龄是${age}`;
//     }else{
//         return "我的名字是"+name+",我的年龄保密"
//     }
// }
// alert(getInfo("张三",15))
// var add:number;
// add =1;
// setTimeout(()=>{
//     add = add+1;
//     if(add=10){
//         alert("我到10了")
//     }
//     console.log(add)
// },1000)
/* es5中继承方法 对象冒充.call + 原型链 结合来实现继承
function Person(name,age){
    this.name = name;
    this.age =age;
    this.run = function(){
        alert(this.name + "在运动！");
    }
}
Person.prototype.work = function(){
    alert(this.name + "在工作！");
}

function Web(name,age){
    Person.call(this,name,age); //es5中对象冒充+原型链组合结合 的继承
}
Web.prototype = new Person();
// 或者通过下面，继承prototype，因为Person.call冒充已经继承了内部的构造函数的方法
Web.prototype =Person.prototype;

var w =new Web("赵四"，15);

w.run();
w.work();
*/
// ts中类的定义
/*class Person{
    name:string;    //属性 前面省略了public 关键词
    
    constructor(name:string){  //构造函数  实例化的时候触发方法
        this.name = name;
    }

    run():void{
        alert(this.name)
    }

    getName():string{
        return this.name;
    }

    setName(name:string):void{
        this.name = name;
    }
}

var t =new Person("张三");
alert(t.getName());
t.setName("李四");
alert(t.getName());
*/
// ts中类的继承
/*
 class People{
     protected name:string;
     constructor(name:string){
         this.name = name;
     }
     
     run():string{
         return `${this.name}在运动`
     }
 }

 class Web extends People{
     constructor(name:string){
         super(name); //调用父类的构造函数，把name传给父类
     }
 }

 var p = new Web(`李四`);
 alert(p.run());
 */
//ts类的三种修饰符  public、protected、private
//ts 多肽属于继承
/*
class Animal{
    public name:string
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log('吃什么')
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        return this.name+`吃骨头`
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        return this.name+`吃老鼠`
    }
}

var C = new Cat("猫")
alert(C.eat())
*/
//ts抽象方法实现多肽    抽象类：它是提供其他类继承的几类，不能直接被实例化
//abstract关键字定义的抽象类和抽象方法，不包含具体的实现，并且必须在派生类中实现
// abstract class Animal{
//     public name:string
//     constructor(name:string){
//         this.name = name
//     }
//     abstract eat():any
// }
//var a = new Animal() //错误，无法创建抽象类的实例
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     //抽象类的子类必须实现抽象类的抽象方法，所以必须有eat方法
//     eat(){
//         console.log(this.name+`吃骨头`)
//     }        
// }
// var d = new Dog("狗")
// d.eat()
//接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
// 接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类必须提供某些方法，提供这些方法的类就可以满足实际需要。
// typescript中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
//ts中的接口：属性类接口、函数类型接口、可索引接口、类类型接口、接口扩展
//1.属性接口    对json的约束
// function printLabel(labelInfo:{'label':string}):void{
//     console.log(`printLabel${labelInfo.label}`);
// }
// printLabel({label:"hhhh"})
/*
interface FullName{
    firstName:string;
    secondName:string;
    age?:number
}

function printName(name:FullName){
    console.log(name.firstName+'----'+name.secondName);
}

function getName(info:FullName){
    console.log(info.firstName+info.secondName+info.age)
}

var obj ={
    firstName:'何',
    secondName:'健',
    age:24
}
printName(obj);
getName(obj)
*/
//原生js封装$.ajax
/*
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

function ajax(config:Config){
    var xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log('success!');
        }
    }
}

ajax({
    type:'get',
    data:'name:zhangsan',
    url:"http://www.baidu.com",
    dataType:'json'
})
*/
//加密的函数类型接口
/*
interface encrypt{
    (key:string,value:string):string
}

var md5:encrypt = function(key:string,value:string):string{

    return key + value;
}

console.log(md5("name","zhangsan"))
*/
//ts定义数组接口    对数组得约束
/*
interface UserArr{
    [index:number]:string
}

var arr:UserArr = ["aaa","222"]
console.log(arr[0])
*/
//可索引接口    对对象得约束
/*
interface UserObj{
    [index:string]:any
}

var arr:UserObj = {
    name:"张三",
    age:14
}
*/
//类类型接口：对类的约束，和抽象类有点相似
/*
interface Animal{
    name:string;
    eat(str:string):void
}

class Dog implements Animal{    //实现接口
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name+"吃骨头")
    }
}

var d = new Dog("小黑狗");
d.eat();

class Cat implements Animal{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(food:string){
        console.log(this.name+"吃"+food)
    }
}

var c = new Cat("小花猫");
c.eat("老鼠");
*/
//接口的扩展：接口继承接口
/*
interface Animal{
    eat():void
}

interface Person extends Animal{
    work():void
}

class Programmer{
    public name:string;
    constructor(name:string){
        this.name = name;
    }

    coding(code:string){
        console.log(this.name+code)
    }
}

class Web extends Programmer implements Person{
    constructor(name:string){
        super(name)
    }
    
    eat(){
        console.log(this.name+"喜欢吃馒头");
    }

    work(){
        console.log(this.name+"喜欢工作")
    }
}

var w = new Web("超人")
w.eat();
w.coding("写代码")
*/
//类的泛型
/*
class MinClass{
    public list:number[]=[];
    add(num:number){
        this.list.push(num);
    }
    min(){
        var minNum = this.list[0]
        for(let i =0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i]
            }
        }
        return minNum
    }
}

var p =new MinClass();
p.add(11)
p.add(10)
p.add(100)
p.add(1000)
p.add(1000)
alert(p.min());

class MinClass<T>{
    public list:T[] = [];
    add(num:T){
        this.list.push(num)
    }
    min():T{
        var minNum = this.list[0]
        for(let i =0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
var N =new MinClass<number>();  //实例化类，并且指定了类的T代表类型是number
N.add(11)
N.add(22)
alert(N.min())
var M = new MinClass<string>();
M.add("c");
M.add("b")
alert(M.min())
*/
//函数类型接口
/*
interface ConfigFn{
    (value1:string,value2:string):string
}

var setData:ConfigFn = function(v1:string,v2:string):string{
    return v1 + v2
}
console.log(setData("name","张三"));
*/
//泛型接口
/*
//第一种方式
interface ConfigFn{
    <T>(value:T):T
}

var getData1:ConfigFn = function<T>(value:T):T{
    return value
}

interface configFn1<T>{
    (value:T):T
}
//第二种方式
function getData2<T>(value:T):T{
    return value
}
var myData:configFn1<string> = getData2;
alert(myData("zhangsan"))
*/
//操作数据库的泛型类
/*
class MysqlDb<T>{
    add(info:T):boolean{
        console.log(info)
        return true
    }
    update(info:T,id:number):boolean{
        console.log(info)
        console.log(id)
        return true;
    }
}
*/
//想给User表增加数据
//1.定义一个User类 和 数据库进行映射
/*
class User{
    username:string | undefined;
    password:string | undefined;
}

var u = new User();
u.username = "张三";
u.password = "123456";

var Db = new MysqlDb<User>();
Db.add(u)
*/
//定义一个ArticalCate类 和 数据库进行映射
/*
class ArticalCate{
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

var a = new ArticalCate({
    title:"国内",
    desc:"关心肺炎",
    status:1
});


var Adb = new MysqlDb<ArticalCate>();
Adb.add(a);

var b = new ArticalCate({
    title:"国外",
    desc:"关心肺炎111",
    status:2
});

var Adc = new MysqlDb<ArticalCate>();
Adc.update(b,12);
*/
/*
功能：定义一个操作数据库的库  支持    mysql   mssql   mongoDb
要求1：mysql mssql   mongoDb功能一样 都有    add update  delete  get方法
注意：约束统一的规范、以及代码重用
解决方案：需要约束规范所以要定义接口，需要代码重用所以需要用到泛型
    1.接口：在面向对象中，接口是一种规范的定义，它定义了行为和动作的规范
    2.泛型   通俗理解：泛型就是解决  类  接口    方法的复用性
*/
/*
interface DBI<T>{
    add(info:T):boolean;
    updata(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
*/
//定义一个操作mysql数据库的类   注意：要实现泛型接口，这个类也应该是泛型类
/*
class MysqlDb<T> implements DBI<T>{
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
*/
//定义一个mssql数据库的类
/*
class MssqlDb<T> implements DBI<T>{
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
*/
//操作用户表    定义一个User类和数据表做映射
/*
import {UserClass,UserModelmysql,UserModelmmsql} from './model/user'

    var u =new UserClass();
    u.username = "张三111";
    u.password ="123456";

    UserModelmysql.add(u);
    var res = UserModelmysql.get(123);
    console.log(res)

import {ArticleClass,Articlelmysql,Articlemmsql} from './model/article'

    var a = new ArticleClass({
        title:"xxx",
        desc:"xxxxx",
        status:1
    });
    Articlelmysql.add(a);
*/
//命名空间避免命名冲突，用于组织代码，通过 namespace +命名，在内部的类和方法，如果外部想要调用，需要在内部export出来
/*
import {Hj} from './model/Hj'   //通过模块导入，模块：侧重代码的重用，一个模块里可能有多个命名空间

var d = new Hj.Dog("狼狗1")
d.eat();
*/
//装饰器：类装饰器在类声明之前杯声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数。也是es7标准特性之一。
//类装饰器:普通装饰器（无法传参）
/*
function logClass(params:any){
    console.log(params);
    params.prototype.apiUrl = 'xxxx'
}

@logClass
class HttpClient{
    constructor(){

    }
    getData(){

    }
}

var http:any = new HttpClient();
console.log(http.apiUrl);
*/
//类装饰器：装饰器工厂（可传参）
/*
function logClass(params:string){
    return function(target:any){
        console.log(target);
        console.log(params);
        target.prototype.apiUrl = params;
    }
}

@logClass('http://www.itying.com')
class HttpClient{
    constructor(){

    }
    getData(){

    }
}

var http:any = new HttpClient();
console.log(http.apiUrl)
*/
//类装饰器
/*
function logClass(target:any){
    return class extends target{    //target指向的是 HttpClient类
        apiUrl = "我是修改后的数据"
        getData(){
            console.log(this.apiUrl)
        }
    }
}

@logClass
class HttpClient{
    public apiUrl:string | undefined;
    constructor(){
        this.apiUrl = "我是构造函数里的apiUrl"
    }
    getData(){
        console.log(this.apiUrl)
    }
}

var p =new HttpClient()
p.getData();
*/
//类装饰器
/*
 function logClass(params:string){

     return function(target:any){
         // console.log(params);
         // console.log(target)
     }
 }
 */
//属性装饰器：传入2个参数 1.类的原型对象。  2.属性的名字
/*
function logProperty(params:string){
    return function(target:any,attr:any){
        console.log(target);
        console.log(attr);
        target[attr] = params   //attr拿到的是url，给url赋予初始值http://www.itying.com
    }
}

@logClass('xxx')
class HttpClient{
    @logProperty('http://www.itying.com')
    public url:any | undefined;
    constructor(){

    }
    getData(){
        console.log(this.url)
    }
}

var p = new HttpClient()
p.getData();
*/
//方法装饰器：传入3个参数   1.原型对象  2.成员的名字    3.成员的属性描述符
/*
function get(params:string){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc.value); //原本方法

        //修改装饰器的方法  把装饰器方法里面传入的所有参数修改位string类型

        //保存原本方法
        var oMethod = desc.value;
        desc.value = function(...args:any[]){
            args = args.map((value)=>{
                return String(value)
            })
            oMethod.apply(this,args)
        }
    }
}

class HttpClient{
    public url:any | undefined;
    constructor(){

    }
    @get('http://itying.com')
    getData(...args:any[]){
        console.log(args)
        console.log('我是getdata里面的方法')
    }
}
var h =new HttpClient()
h.getData(111,"222",333,undefined)
*/
//方法参数装饰器：传入3个参数   1.原型对象  2.方法的名字    3.参数在函数参数列表中的索引
/*
function logParams(params:string){
    return function(target:any,methodName:any,paramsIndex:any){
        console.log(target)
        console.log(methodName)
        console.log(paramsIndex)
    }
}

class HttpClient{
    public url:string | undefined;
    constructor(){

    }
    getData(@logParams('xxxx') uuid:any){
        console.log("我是getdata里面的方法")
    }
}

var http = new HttpClient();
http.getData(1223)
*/
//装饰器执行顺序
//属性》方法》方法参数》类
//如果有多个同样的装饰器，会先执行后面一个装饰器
function logClass1(params) {
    return function (target) {
        console.log("类装饰器1");
    };
}
function logClass2(params) {
    return function (target) {
        console.log("类装饰器2");
    };
}
function logAttribute(params) {
    return function (target, attrName) {
        console.log('属性装饰器');
    };
}
function logMethod(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器');
    };
}
function logParams1(params) {
    return function (target, methodName, paramsIndex) {
        console.log('方法参数装饰器1');
    };
}
function logParams2(params) {
    return function (target, methodName, paramsIndex) {
        console.log('方法参数装饰器2');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute()
    ], HttpClient.prototype, "url", void 0);
    __decorate([
        logMethod()
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient.prototype, "setData", null);
    HttpClient = __decorate([
        logClass1("http://www.baidu.com"),
        logClass2("xxxxx")
    ], HttpClient);
    return HttpClient;
}());
