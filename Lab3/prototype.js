//1
let animal = { jumps: null };
let rabbit = { __proto__: animal, jumps: true };

console.log(rabbit.jumps); // true (собственное свойство)
delete rabbit.jumps;
console.log(rabbit.jumps); // null (берётся из animal)
delete animal.jumps;
console.log(rabbit.jumps); // undefined (свойства больше нет)

console.log();
//2
let animal2 = {
    eat() {
        this.full = true;
    }
};

let rabbit2 = {__proto__: animal2};
rabbit2.eat();

console.log(rabbit2.full);
console.log(animal2.full); // full создаётся только у rabbit2

console.log()
//3
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach = [...this.stomach,food]; // Для каждого объекта будет хранится свой массив съеденной еды
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");

console.log(speedy.stomach); // ["apple"]
console.log(lazy.stomach); // []


console.log();
//4
String.prototype.color = "black";
String.prototype.size = 12; // новое свойство
String.prototype.write = function() {
  console.log(`Цвет текста: ${this.color}, Размер: ${this.size}, Текст: ${this.toString()}`);
};

let s = new String("Это строка");
s.color = "red";
s.size = 14;
s.write();

let s2 = new String("Вторая строка");
s2.write(); // использует значения по умолчанию


console.log()
//5
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};
let rabbit3 = new Rabbit();

Rabbit.prototype = {}; // создаётся новая ссылка на пустой объект
Rabbit.prototype.eats = false; // в новый прототип функции Rabbit добавляется св-во eats = false, это никак не влияет на rabbit3
delete rabbit3.eats; // у rabbit3 нет собственного свойства eats, поэтому эта операция ничего не делает
delete Rabbit.prototype.eats; // удаляет свойство eats из нового прототипа Rabbit, это никак не влияет на rabbit3
console.log(rabbit3.eats); // true
