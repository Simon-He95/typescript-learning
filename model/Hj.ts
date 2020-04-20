export namespace Hj{
    interface Animal{
        eat():void
    }

    export class Dog implements Animal {
        name:string;
        constructor(name:string){
            this.name = name
        }
        eat():void{
            console.log(this.name+"吃骨头")
        }
    }

}