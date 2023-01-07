const objMethods = {
  introduction() {
    console.log(
      `hello my name is ${this.name}, my color is ${this.color} and my breed is ${this.breed}  nice to meet you`
    );
  },
  eat() {
    console.log(`i can eat very well`);
  },
  bark() {
    console.log(`hello, i bark when i'm hungry`);
  },
};

function Animal(specie , color){
    this.color = color;
    this.specie = specie
}

function Dog(name) {
    this.name = name;


 
}
Dog.prototype = Object.create(Animal.prototype);

const doodle = new Animal('mammal', 'white',);
const husky =  new Dog('husky');
// doodle.bark();

Dog.prototype.introduction = function () {
  console.log(
    `hello my name is ${this.name}, my color is ${this.color} and my breed is ${this.breed}  nice to meet you`
  );
};
Dog.prototype.eat = function () {
  console.log(`i can eat very well`);
};
Dog.prototype.bark = function () {
  console.log(`hello, i bark when i'm hungry`);
};
doodle.bark();
