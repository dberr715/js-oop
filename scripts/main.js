"use strict";
class Person {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.friends = [];
  }

  greet(otherPerson) {
    console.log(`Hello ${otherPerson.name}, I am ${this.name}!`);
  }

  print_contact_info(person) {
    console.log(
      `This is the contact info of ${this.name}: email--${this.email} phone--${this.phone}`
    );
  }

  add_friend(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
  }
  num_friends(person) {
    this.friends.length;
  }

  list_friends(person) {
    return this.friends.map((friend) => friend.name);
  }
}

const sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
const jordan = new Person("Jordan", "jordan@aol.com", "4955863456");
console.log(sonny.greet(jordan));
console.log(jordan.greet(sonny));
console.log(`${sonny.email}`);
console.log(`${sonny.phone}`);
console.log(
  `Here is Jordan's contact info: Phone--${jordan.phone}, email--${jordan.email}`
);
console.log(sonny.print_contact_info());

sonny.friends.push(jordan);
jordan.friends.push(sonny);
console.log(jordan.friends.length);

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print_info(vehicle) {
    console.log(`This is a ${this.year} ${this.make} ${this.model}`);
  }
}

const car = new Vehicle("Toyota", "RAV4", "2020");
console.log(car);

car.print_info();
