class Person {
  constructor(name = "testUser") {
    this.name = name;
  }
}

const me = new Person("Dhananjay");
console.log(me);
const anonymous = new Person();
console.log(anonymous);
