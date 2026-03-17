// ----------Задание 2--------------
function readConfig (name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

function doQuery (statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function httpGet (url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function readFile (path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

    // Промисифицированные функции
function readConfigPromise(name) {
    return new Promise((resolve) => {
        readConfig(name,resolve);
    });
}

function doQueryPromise(statement) {
    return new Promise((resolve) => {
        doQuery(statement,resolve);
    });
}

function httpGetPromise(url) {
    return new Promise((resolve) => {
        httpGet(url,resolve);
    });
}

function readFilePromise(path) {
    return new Promise((resolve) => {
        readFile(path,resolve);
    });
}

// -------Задание 3----------
function f1(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x * x; 
            console.log(`f1 даёт значение ${result}`);
            resolve(result);
        }, Math.random() * 500);
    });
}

function f2(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = 2 * x;
            console.log(`f2 даёт значение ${result}`);
            resolve(result);
        }, Math.random() * 500);
    });
}

function f3(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = -2; 
            console.log(`f3 даёт значение ${result}`);
            resolve(result);
        }, Math.random() * 500);
    });
}

function f4(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = x + 5; 
            console.log(`f4 даёт значение ${result}`);
            resolve(result);
        }, Math.random() * 500);
    });
}

function f5(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = 3; 
            console.log(`f5 даёт значение ${result}`);
            resolve(result);
        }, Math.random() * 500);
    });
}

function f6(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = 0; 
            console.log(`f6 даёт значение ${result}`);
            resolve(result);
        }, Math.random() * 500);
    });
}


//функция-помощник
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Задание 2 через async/await
async function executeSeq() {
    console.log('start');

    await readConfigPromise('myConfig');
    await doQueryPromise('select * from cities');
    await httpGetPromise('http://google.com');
    await readFilePromise('README.md');

    console.log('It is done');
    console.log('end');
}

// Задание 3 через async/await
async function computeFAsync(x, functions) {
    let total = 0;
    
    for (let i = 0; i < functions.length; i++) {
        const result = await functions[i](x);
        total += result;
        console.log(`Промежуточный результат после f${i + 1}: ${total}`);
    }
    
    return total;
}

async function demonstrateComputeF() {
     console.log('\nn = 2 через async/await');
    let result = await computeFAsync(3, [f1, f2]);
    console.log(`Ответ для F(x): ${result}`);
    
    console.log('\nn = 4 через async/await');
    result = await computeFAsync(3, [f1, f2, f3, f4]);
    console.log(`Ответ для F(x): ${result}`);
    
    console.log('\nn = 6 через async/await');
    result = await computeFAsync(3, [f1, f2, f3, f4, f5, f6]);
    console.log(`Ответ для F(x): ${result}`);
}

//Задание 4 через async/await
async function createSumProcessorAsync(initialValue, fixedValue) {
    // Проверка типов аргументов
    if (typeof initialValue !== 'number' || typeof fixedValue !== 'number') {
        throw new Error('Аргументы должны быть числами');
    }
    
    let currentValue = initialValue;
    const maxCalls = 5;
    
    console.log(`Начальное значение: ${currentValue}, постоянное: ${fixedValue}`);
    
    for (let callCount = 1; callCount <= maxCalls; callCount++) {
        await delay(2000);
        const sum = currentValue + fixedValue;
        console.log(`Вызов ${callCount}: ${currentValue} + ${fixedValue} = ${sum}`);
        currentValue = sum;
    }
    
    console.log(`Достигнуто максимальное количество вызовов (${maxCalls})`);
    return currentValue;
}

async function demonstrateSumProcessor() {
    try {
        console.log('\nУспешный вариант (async/await)');
        const result = await createSumProcessorAsync(5, 3);
        console.log(`Итоговый результат: ${result}`);
    } catch (error) {
        console.error(`Ошибка: ${error.message}`);
    }
    
    try {
        console.log('\nВариант с ошибкой (async/await)');
        const result = await createSumProcessorAsync(5, 'vafly');
        console.log(`Итоговый результат: ${result}`);
    } catch (error) {
        console.error(`Ошибка: ${error.message}`);
    }
}

await executeSeq();
await delay(3000);
demonstrateComputeF()
await delay(8000);
demonstrateSumProcessor();