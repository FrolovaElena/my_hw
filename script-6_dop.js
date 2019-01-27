'use strict';

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/
/*
const Account = function Account(login, email, friendsCount) {
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
};

Account.prototype.getAccountInfo = function getAccountInfo() {
  console.log(
    `name: ${this.login}, email: ${this.email}, freands: ${this.friendsCount}`,
  );
};

const mango = new Account('Mango', 'mango@mail.com', 4);
console.log(mango);
mango.getAccountInfo();
*/

/*
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/
/*
class StringBuilder {
  constructor(string) {
    this.value = string;
  }
  showValue() {
    console.log(this.value);
  }
  append(str) {
    const array = this.value.split(' ');
    array.push(str);
    this.value = array.join(' ');
  }
  prepend(str) {
    const array = this.value.split(' ');
    array.unshift(str);
    this.value = array.join(' ');
  }
  pad(str) {
    const array = this.value.split(' ');
    array.push(str);
    array.unshift(str);
    this.value = array.join(' ');
  }
}

const stringBuilder = new StringBuilder('.');

stringBuilder.append('^');
stringBuilder.showValue(); // '.^'

stringBuilder.prepend('^');
stringBuilder.showValue(); // '^.^'

stringBuilder.pad('=');
stringBuilder.showValue(); // '=^.^='
*/

/*
  Создайте класс Car с указанными полями и методами.
*/
class Car {
  constructor(maxSpeed, value) {
    this.speed = 0;
    this._value = value;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    /*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0

        - добавить поле value.

        - использовать геттер и сеттер для поля value. 
    */
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    return this._value;
  }

  turnOn() {
    this.running = true;
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    if (spd > this.maxSpeed) return;

    this.speed = spd;

    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if (spd > this.maxSpeed || spd < 0) return;

    this.speed = spd;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    if (!this.running) return;

    this.distance = hours * this.maxSpeed;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
  static getSpecs(obj) {
    console.log(
      `max.speed: ${obj.maxSpeed}, running: ${obj.running}, distance: ${
        obj.distance
      }`,
    );
  }
}
/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  */
const someCar = new Car(100);
someCar.turnOn();
someCar.drive(2);

Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

const myCar = new Car(50, 2000);

console.log(myCar.value);
myCar.value = 3000;
console.log(myCar.value);
