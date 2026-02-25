//1
class Clock {
    constructor(hours,minutes,seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    display() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
}

let clock = new Clock(13,25,40);
clock.display();


console.log()
//2
class Animal {
    constructor(name) {
    this.name = name;
    }
}
class Rabbit extends Animal {
    constructor(name) {
        super(name); // наследуем свойства у суперкласса
        this.created = Date.now();
    }
}
let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);


console.log();
//4
class Stock {
    constructor() {
        this.boxes = [];
        this.counter = 0;
    }

    add(w,v) {
        this.boxes.push({
            id: this.counter++,
            w: w,
            v: v,
            time: Date.now()
        });
    }

    getByW(min_w) {
        let suitable = this.boxes.filter(b => b.w >= min_w);
        if(suitable.length === 0) return -1;
        
        suitable.sort((a,b) => b.time - a.time); // чем больше time, тем новее коробка
        let box = suitable[0];
        this.boxes = this.boxes.filter(b => b.id !== box.id); // удаляем со склада выбранную коробку
        return box.id;
    }

    getByV(min_v) {
        let suitable = this.boxes.filter(b => b.v >= min_v);
        if(suitable.length === 0) return -1;
        
        suitable.sort((a,b) => b.time - a.time); 
        let box = suitable[0];
        this.boxes = this.boxes.filter(b => b.id !== box.id); 
        return box.id;
    }
}

let stock = new Stock();
setTimeout(() => stock.add(10, 20), 100);  // Коробка 0, time: 100
setTimeout(() => stock.add(15, 5), 200);   // Коробка 1, time: 200
setTimeout(() => stock.add(10, 30), 300);  // Коробка 2, time: 300
setTimeout(() => stock.add(20, 15), 400);  // Коробка 3, time: 400

setTimeout(() => {
  console.log(stock.getByW(10)); // 3
  
  console.log(stock.getByV(25)); // 2
  
  console.log(stock.getByV(25)); // -1
}, 1000);

console.log();
//3
class Clock2 {
    constructor(template) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock2 {
    constructor(template,precision = 1000){
        super(template);
        this.precision = precision;
    }
    start(){
        this.render()
        this.timer = setInterval(() => this.render(), this.precision);    
    }
}

let extClock = new ExtendedClock("h:m:s", 2000);
extClock.start();