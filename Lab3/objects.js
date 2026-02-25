//1
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

console.log();
//2
const myBrowser = {
    name: "Microsoft Internet Explorer",
    version: 9.0
};
for(let key in myBrowser){
    console.log(`${key}: ${myBrowser[key]}`);
}

console.log();
//3
const exam1 = {};
const exam2 = {age: 25, name: "Василий"};
let res = isEmpty(exam1);
let res2 = isEmpty(exam2);
console.log(res);
console.log(res2);

function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

console.log();
//4
const user2 = {
    name: "John"
};
// Будет работать, т.к const защищает только ссылку на объект, а не его содержимое
user2.name = "Pete";
console.log(user2.name);

// Вызовет ошибку, т.к мы пытаемся перезаписать константу
//user = 123; 

console.log();
//5
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);
function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
}

console.log();
//6
const calculate = {
    read: function(a,b){
        this.value1 = a;
        this.value2 = b;
    },
    sum: function() {
        return this.value1 + this.value2;
    },
    mul: function() {
        return this.value1 * this.value2;
    }
}
calculate.read(10,20);
console.log(calculate.sum());
console.log(calculate.mul());

console.log();
//7
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log(this.step);
        return this;
    }
};
ladder.up().up().down().showStep().up().up().showStep();

console.log();
//8
function Browser(name,version){
    this.name = name;
    this.version = version;
    this.aboutBrowser = function() {
        console.log(`Name: ${this.name}, Version: ${this.version}`);
    };
}

let myBrowser2 = new Browser("Microsoft Internet Explorer", "9.0");
myBrowser2.aboutBrowser();

console.log();
//9
function Employee(name,department,phone,salary){
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;
    this.display = function() {
        console.log(`Имя: ${this.name}, Отдел: ${this.department}, 
        Телефон: ${this.phone}, Зарплата: ${this.salary}`);
    };
}

let emp = new Employee("Кирилл","IT","123-456-32-55", 60000);
emp.display();

console.log();
//10
let calc = new Calculator();
calc.read(5,6);
console.log(calc.sum());
console.log(calc.mul());

function Calculator(){
    this.read = function(a,b){
        this.a = a;
        this.b = b;
    };

    this.sum = function(){
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    }
}

console.log();
//11
let acc = new Accumulator(10);
acc.read(5);
console.log(acc.value);
acc.read(4);
console.log(acc.value);


function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(a) {
        return this.value +=a; 
    };
}
