//1
let arr = [2,5,6];
console.log(arr[2]);
console.log(arr.length);
arr.splice(2);
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}

console.log("");
//2
let countries = ["Россия","Венгрия","США","Япония","Бразилия"];
let population = [143517963,9676000, 348393211,122685214,213292819];
console.log("");

//forCount
for(let i = 0; i < countries.length;i++){
    printCountryPopulation(countries[i],population[i]);
}
//forIn
for(let index in countries) {
    printCountryPopulation(countries[index],population[index]);
}

function printCountryPopulation(country, pop) {
    console.log(`${country}: ${pop} человек.`);
}

console.log("");
//3
let arrMon = ["January", "February", "March", "April", "May", "June"];
let len = arrMon.pop();
console.log(arrMon.join(" "));
console.log(len);

console.log("");
//4
let a = [1, 2, 3, 4, 5, 6, 7];
let t = a.slice(0,3);
console.log(t);

console.log("");
//5
let az = [1, 2, 3, 4, 5, 6, 7];
let d = az.splice(1,3);
console.log(az);

console.log("");
//6
let arrNum = [1,2,3,4,5];
console.log(arrNum.reverse());

console.log("");
//7
let arrSym = ['c', 5, 2, 'b', 3, 1, 4, 'a'];
arrSym.sort();
console.log(arrSym);

console.log("");
//8
let numJoin = [ 1, 2, 3, 4, 5];
console.log(numJoin.join("+"));

console.log("");
//9
let arr1 = [1, 2, 5, 4, 6,7];
let arr2 = [8,2, 5, 9, 5];

arr1.sort();
arr2.sort();


let me1 = median(arr1); 
let me2 = median(arr2);
console.log(`${me1} - медиана первого массива; ${me2} - медиана второго массива`);

function median(arr) {
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid] + arr[mid-1]) / 2
}

console.log("");
//10
let arrayRandom = new Array(10);
randomComp(arrayRandom);
MaxMinValueArray(arrayRandom);


function randomComp(arr) {
    for(let i = 0; i < arr.length;i++){
        arr[i] = Math.floor(Math.random()* 100 + 1);
    }
    console.log(arr);
}

function MaxMinValueArray(arr) {
    let maxV = arr[0];
    let minV = arr[0];
    let indexMax = 0;
    let indexMin = 0;
    
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > maxV) {
            maxV = arr[i];
            indexMax = i;
        }

        if(arr[i] < minV) {
            minV = arr[i];
            indexMin = i;
        }
    }
    console.log("Максимальный элемент: " + maxV);
    console.log("Минимальный элемент: " + minV);

    let tmp = arr[indexMax];
    arr[indexMax] = arr[indexMin];
    arr[indexMin] = tmp;

    console.log(arr);  
}

console.log("");
//11
let arrSrRv = [5, 3, 2, 1];
console.log("Исходный массив:", arrSrRv);
let result = arrIsSortOrReverse(arrSrRv);
console.log("Результат:", result);

function arrIsSortOrReverse(arr) {
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) { 
            return i + 1; 
        }
    }
    
    return arr.slice().reverse(); 
}

console.log("");
//12
let arrDfMl = [-3,-2,5,4,2,-1,-10];
console.log(arrDfMl);
arrDivAndMulti(arrDfMl);


function arrDivAndMulti(arr) {
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > 0 && i % 2 !== 0) {
            arr[i] *= 3;
        } else if (arr[i] < 0 && i % 2 === 0) {
            arr[i] /= 5;
        }
    }
    console.log(arr);
}

console.log("");
//13
let matrix = new Array(5).fill(0).map(() => new Array(5).fill(0));
completeMatrix(matrix);
valueInRange(matrix);

function valueInRange(arr){
    const rows = arr.length;
    const cols = arr[0].length;

    const elements = [];
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let value = arr[i][j];
            if(value >= -5 && value <= 7){
                elements.push(value);
            }
        }
    }
    console.log(`Значения, входящие в диапозон: ${elements}`);
}

function completeMatrix(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    
    let min = -15;
    let max = 15;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++) {
            arr[i][j] = Math.floor(min + Math.random()*(max - min + 1));
        }
    }
    console.log(arr);
}

console.log("");
//14
let arrMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0));
RandomNumbersForMatrix(arrMatrix);
SumMaxAndMinMultiMatrix(arrMatrix);


function SumMaxAndMinMultiMatrix(arr) {
    const rows = arr.length;
    const cols = arr[0].length;

    let sumMaxInRows = 0;
    const maxInRows = [];

    // Сумма max значений по rows
    for(let i = 0; i < rows; i++){
        let maxInRow = arr[i][0];
        for(let j = 1; j < cols; j++){
            if(arr[i][j] > maxInRow) {
                maxInRow = arr[i][j];
            }
        }
        maxInRows.push(maxInRow);
        sumMaxInRows+=maxInRow;
    }

    let multiMinInCols = 1;
    const minInCols = [];

    //Произведение min по cols
    for(let j = 0; j < cols; j++){
        let minInCol = arr[0][j];
        for(let i = 1; i < rows; i++){
            if(arr[i][j] < minInCol) {
                minInCol = arr[i][j];
            }
        }
        minInCols.push(minInCol);
        multiMinInCols *= minInCol;
    }
    console.log(`Максимальные элементы строк: ${maxInRows}`);
    console.log(`Сумма максимальных элементов по строке: ${sumMaxInRows}`);
    console.log(`Минимальные элементы столбцов: ${minInCols}`);
    console.log(`Произведение минимальных элементов по столбцам: ${multiMinInCols}`);
}

function RandomNumbersForMatrix(arr) {
    const rows = arr.length;
    const cols = arr[0].length;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++) {
            arr[i][j] = Math.floor(Math.random() * 50 + 1);
        }
    }
    console.log(arr);
}

console.log("");
//15
let books = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
    "Есенин": ["Черный человек", "Анна Снегина", "Исповедь хулигана"],
    "Данцова": ["Любовь и шоколад", "Счастье по рецепту"],
    "Толстой": ["Война и мир", "Анна Каренина"],
    "Достоевский": ["Преступление и наказание", "Идиот"]
};

displayAllBooks(books);

function displayAllBooks(books){
    for(let author in books) {
        console.log(`Автор: ${author}`);
        console.log("Книги:");
    

    for(let i = 0; i < books[author].length;i++){
        console.log(` ${i+1}. ${books[author][i]}`);
    }

    console.log("");
    }
}



