
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
// greet(){
//   return "Hello " + this.name;
// }
get greet(){
  return "Hello " + this.name;
}


// changeName(newName){
//   this.name=newName;
// }
set changeName(newName){
  this.name=newName;
}

}


const person1 = new Person("Elon Musk", 52);
const person2 = new Person("Bill Gates",60);
console.log(person1.name);
// person1.changeName("Shreya Jain")
person1.changeName = "Shreya Jain"
console.log(person1.name);
// console.log(person1.greet());
console.log(person1.greet);