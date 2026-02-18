//1
let x = 10;
let y = 5;


differenceResultOutput(x,y);
console.log(differenceResultReturn(x,y));

function differenceResultOutput(a, b) {
    let res = a - b;
    console.log(res);
}

function differenceResultReturn(a,b){
    return a - b;
}

//2
let age = 19;

console.log(welcomeWindow(age));

function welcomeWindow(age){
    return age < 18 ? "Привет, малыш!" : "Здравствуйте, юноша!"
}

//3
let a = 25, b = 20, c = 30;
console.log(maxValue(a,b,c));

function maxValue(a,b,c) {
    if(a > b && a > c) {
        return a
    } else if(b > a && b > c){
        return b
    } else if(c > a && c > b) {
        return c
    } else {
        return a;
    }
}

//4
let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    console.log(variable);
}
f(); // функция находит переменную в своей области видимости, поэтому выводит "локальная переменная"
console.log(variable); // когда выходим из функции, локальная переменная умирает, и мы уже обращаемся к глобальной переменной

//5
let xf=10,yf=15,zf=12;
console.log(uFun(xf,yf,zf));

function uFun(x,y,z) {
    let u = (maxForTwo(x,y) + maxForTwo(x+y,z)) / ((maxForTwo(0.5,x+z))**2);
    return u.toFixed(4);
}
function maxForTwo(a,b){
    return a > b ? a : b;
}

//6
let n = 4
console.log(perimeter(n,0, 0, 2, 0, 2, 2, 0, 2));

function perimeter(n, ...coords) {
    if(coords.length !== 2*n) {
        return "Ошибка: кол-во координат должно быть 2n";
    }

    let per = 0;
    for(let i = 0; i < n; i++) {
        let x1 = coords[2*i];
        let y1 = coords[2*i+1];

        let nextInd = (i+1) % n;
        let x2 = coords[2*nextInd];
        let y2 = coords[2*nextInd + 1];

        let side = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
        per+=side;
    }
    return per;
 }

//7
let seq = 5;
console.log(sumsequence(seq));
function sumsequence(n) {
    if(n === 1) {
        return 1;
    }

    let sum = 0;
    for(let i = 1; i < n; i++) {
        sum+=sumsequence(i);
    }

    return Math.sin(sum);
}