// object = a collection of related properties
// and/or methods, can represent real world objects 
//(people, product, places)

const person1 ={
    firstName: "Pooja",
    lastName: "Singh",
    age: 23,
    isEmployed: true,
    sayHello:function(){console.log("Hi! I am P!")},
    eat:()=>{console.log("I am eating pizza")},
};

console.log(person1.firstName);
console.log(person1.age);
person1.sayHello();
person1.eat();

const person ={
    firstName: "Pooja",
    age: 20,
    isEmployed: true,
    sayHello:function(){console.log(`Hi! I am ${this.firstName}`)},
};
// this = reference to the object where THIS is used, object depend on immediate context
person.sayHello();

console.log(this); // window object
//this keyword doesn't work with arrow fn

//constructor = special methods for defining properties and methods of objects
function Car(make, model, year){
    this.make = make,
    this.model = model,
    this.year =  year,
    this.drive = function(){console.log(`you drive ${this.model}`)}
}

const car1= new Car("Ford", "Mustang", 2024);
const car2 = new Car("Chevrolet", "Camaro", 2025);
console.log(car1.make);
console.log(car2.year);

car1.drive();
