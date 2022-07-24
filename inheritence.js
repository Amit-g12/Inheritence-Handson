//question 1 Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype


const nameFile = {
    getDetails(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    },
}
nameFile.details = function(){
    console.log(`The name is ${this.fName} ${this.lName} and the person age is ${this.age}`);
}

const callObj = Object.create(nameFile);
callObj.getDetails('Amit', 'Kumar', 24);
callObj.details();

const callObj1 = Object.create(nameFile);
callObj1.getDetails('TJ', 'Singh', 26);
callObj1.details();

//Question2
//Write code to explain prototype chaining.

const firstPerson = {
    profile() {
      console.log(
        `My name is  ${this.name} ${this.rollno} and current age is ${2022 - this.DOB}`
      );
    },
    initialise(name, rollno, DOB) {
      this.name = name;
      this.rollno = rollno;
      this.DOB = DOB;
    },
  };

const obj1 = Object.create(firstPerson);
obj1.initialise("Amit", 1020, 1978);
obj1.profile();
console.log(obj1);
  
const obj2 = Object.create(firstPerson);
obj2.initial = function (name, rollno, DOB, course) {
    firstPerson.initialise.call(obj2, name, rollno, DOB);
    this.course = course;
};
  
obj2.introduce = function () {
    console.log(`the person name is ${this.name} and age is ${this.DOB}`);
};
  
const nextNmae = Object.create(obj2);
nextNmae.initial("Randeep", 1014, 1979, "CET");
nextNmae.introduce();
nextNmae.profile();
    
    
    
//Question3
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

function arraySum(a){
    let sum=0;
    for(let i in a) { 
        sum += a[i];
    }
    return sum;
}
let array = [1,2,3,4]; 
let tSum= arraySum(array);
    
//Question4
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function iPerson(fName, lName, age, DOB) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.DOB = DOB;
  }

iPerson.prototype.entity = " Engineering ";
const info = new iPerson("Amit", "Kumar", 24, 1998);
// console.log("HelloHi");
console.log("I have done BTECH" + info.entity);

    
    
    
    
    