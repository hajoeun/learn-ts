// class Car {
//     model: String;
//     doors: Number;
//     isMine: Boolean;
//
//     constructor(model: String, doors: Number, isMine: Boolean) {
//         this.model = model;
//         this.doors = doors;
//         this.isMine = isMine;
//     }
//
//     run(): void {
//         console.log(`This car is ${this.model}`)
//     }
// }
//
// const newCar = new Car('Sonata', 4, false);
// newCar.run();
//
// interface Card {
//     name: String,
//     id: Number,
//     date: Date,
//     isValid()
// }
//
// const SamsungCard: Card  = {
//   name: 'Samsung TapTap Card',
//   id: 100,
//   date: new Date(),
//   isValid() {
//     console.log("Hello!");
//     // return false;
//   }
// };
//
//  SamsungCard.isValid();
//
//  interface Bird {
//      fly(),
//      layEggs()
//  }
//
//  const Eagle: Bird = {
//      fly() {
//        console.log("Fly High");
//      },
//      layEggs() {
//          console.log('Lay Eggs');
//      }
// };
//
//  Eagle.fly();
//
var Developer = /** @class */ (function () {
    function Developer(firstName, lastName, lang, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
        this.language = lang;
        this.age = age;
    }
    return Developer;
}());
function greeting(person) {
    return "Hello " + (person.firstName + person.lastName) + " and " + person.age;
}
var Joeun = new Developer('Joeun', 'Ha', 'Javascript', 15);
console.log(greeting(Joeun));
