

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class Son extends Person{
     getDetails=()=>{
        return `My name is ${this.name} and age is ${this.age}`
    }
}

const p=new Son("chandra",25);
console.log(p.getDetails());