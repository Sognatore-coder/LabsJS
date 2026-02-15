//1
let num = 42;
let str = "Hello";
let bool = true;
let obj = { name: "John" };
let undef;

console.log(typeof num);   
console.log(typeof str);   
console.log(typeof bool);  
console.log(typeof obj);   
console.log(typeof undef); 

//2
let x = 10;
let y = 5;

console.log(x == y);  
console.log(x < y);    
console.log(x <= y);   
console.log(x > y);

//3
let a = false;
let b = null;
let c;

console.log(a);
console.log(b); 
console.log(c); 

// 4
console.log("1" + 2 + 3); // первый параметр идёт как строка, поэтому следующие операция сложения будут обычной конкатенацией строк
console.log(1 + 2 + "3"); // конкатенация, но сначала происходит сложения чисел, а потом  преобразования в строку
console.log("1" - 2); // вычитание работает только с числами, поэтому 1 преобразуется в число и выполнится обычнаыя математическая операция
console.log("1" + "1" - "1"); // сначала конкатенация строк, потом преобразование строки в число и обычное вычитание
console.log("foo" + - "bar"); //fooNan, сначала строка, а потом неопределенное математическое вычисление, т.к минус работает с числами, а из второго опрератора невозможно вынести числовое значение
console.log(0 == "0"); // true (нестрогое равенство)
console.log(0.5 + 0.1 == 0.6); // true
console.log(0.1 + 0.2 == 0.3); // false (ошибка округления чисел с плавающей точкой)
console.log(true + true + true == 3); // true (true = 1)
console.log(true == 1); // true (нестрогое равенство)
console.log(true === 1); // fasle (строгое равенство)
console.log(1 < 2 < 3); // true (сначала проверка чисел, 1 < 2 -> true, преобразование в число true -> 1 => 1 < 3 - > true)
console.log(3>2>1); // false (3 > 2 - > true, преобразование в число true -> 1 => 1 > 1 -> false)
console.log(9007199254740991 + 1 == 9007199254740991 + 2); // true (оба числа равны 9007199254740992)
console.log(Math.sqrt(-1) == Math.sqrt(-1)); // false (NaN не равно NaN)

//5
let str1 = "Кто ";
let str2 = "ты ";
let str3 = "такой?";
let concatenation = str1 + str2 + str3;

console.log(concatenation);

//6
let strd = "20";
let ad = 5;

console.log(strd + ad); // "205" (конкатенация)
console.log(strd - ad); // 15 (преобразование в число)
console.log(strd * "2"); // 40 (преобразование в число)
console.log(strd / 2); // 10 (преобразование в число)

//7
let a1 = "12";
let b2 = "7.15";

let numA = parseFloat(a1);
let numB = parseFloat(b2);

let result = Math.round(numA % numB);
console.log(result);

//8
let x1 = 10;
let result1 = (x1**2 - 7*x1 + 10) / (x1**2 - 8*x1 + 12);
console.log(result1);

//9
let email = "user.mail.ru";
if (!email.includes("@")) {
    console.log("Предупреждение: email должен содержать @");
}
