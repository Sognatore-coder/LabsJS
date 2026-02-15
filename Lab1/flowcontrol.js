//1
let age = 25;
if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
} else {
    console.log("Для всех возрастов");
}

if (age >= 1 && age <= 17) {
    console.log("Для детей");
}

//2
let a3 = 10, b3 = 20
let max = a3 > b3 ? a3 : b3;
console.log(max);

//3
let count = 4;
switch (count) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        console.log("На ветке сидит " + count + " вороны");
        break;
    default:
        console.log("На ветке сидит " + count + " ворон");
}

//4
let resultwhile = "";
let i = 0;
while(i <= 50) {
    if(i % 2 !==0 ) {
        resultwhile+=i + " ";
    }
    i++;
}
console.log(resultwhile);

let resultfor = "";
for(let j = 0; j <= 50; j++){
    if(j % 2 !==0){
        resultfor+= j + " ";
    }
}
console.log(resultfor);

//5
let sum = 0;
for(let k = 1; k <= 15; k++){
    if(k !== 5 && k !== 7){
        sum+=k;
    }
}
console.log(sum);

//6
let x3 = 2, y3 = 4, resultmulti = 1, v = 0;
while(v < y3) {
    resultmulti*=x3;
    v++
}
console.log(resultmulti);