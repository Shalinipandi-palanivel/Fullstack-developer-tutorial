// In javasript everything is an object, we don't have anything called class - class is just syntax in js

// ways to  reate an object
// - using literals
// - using constructor
// - using class 


//using literals - creating a new object from another object
const obj = {name: 'shalini'};
const obj1 = Object.create(obj);
// console.log(obj,obj1);//output - { name: 'shalini' } {}
// console.log(obj.name,obj1.name);

//using Constructor

function person(){
    this.name = 'shalu' // this refers to a current object
    this.company = 'Aptean';
}

const obj2 = new person(); // new keyword is assigned to creatte a new object
// console.log(obj2);

function person1(name,company){
    this.name = name // this refers to a current object
    this.company = company;
}
const obj3 = new person1('dhanvi','microsoft'); 
// console.log(obj3);

// Class

class Person4{
    constructor(name,company){ // writing constructor explicitly
        this.name = name
        this.company = company;
        this.printDetail = function(){
            console.log(`Name: ${this.name}, Company: ${this.company}`);
        }
    }
     getName(){
     return `${this.name} ${this.company}`;
 }
}

const person3 = new Person4('shalu','hcl'); 
// console.log(person3);

    //output - Person4 {
    //     name: 'shalu',
    //     company: 'hcl',
    //     printDetail: [Function (anonymous)]
    //   }

const person5 = new Person4('shalu','hcl'); 
// console.log(person5.getName());

// Inheritance - prototypical hierarchy

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.printDetail = function() { 
            return (`Name: ${this.firstName}, lastName: ${this.lastName}`);
        }
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    sum(a,b) {
        return a + b;
    }
}

class Student extends Person{
    constructor(firstName, lastName, rollNo, course) {
        super(firstName, lastName);
        this.rollNo = rollNo;
        this.course = course;
    }

    sum(a,b,c) {
        console.log('Child')
        return a + b + c;
    }
}

const shalu = new Student('shalini', 'pandi', 1, 'Web Development');
console.log(shalu.printDetail());
console.log(shalu.getName());
console.log(shalu.sum(1,2,3));
