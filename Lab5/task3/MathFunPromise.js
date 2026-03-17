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

function computeFPromise(x, functions) {
    let total = 0;
    let promiseChain = Promise.resolve();
    
    functions.forEach((func, index) => {
        promiseChain = promiseChain
            .then(() => func(x))
            .then(result => {
                total += result;
                console.log(`Промежуточный результат после f${index + 1}: ${total}`);
            });
    });
    
    return promiseChain.then(() => total);
}

console.log('n = 2');
computeFPromise(3, [f1, f2]).then(result => {
    console.log(`Ответ для F(x): ${result}`);
    
    console.log('\nn = 4');
    return computeFPromise(3, [f1, f2, f3, f4]);
}).then(result => {
    console.log(`Ответ для F(x): ${result}`);
    
    console.log('\nn = 6');
    return computeFPromise(3, [f1, f2, f3, f4, f5, f6]);
}).then(result => {
    console.log(`Ответ для F(x): ${result}`);
});