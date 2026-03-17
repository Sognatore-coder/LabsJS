// Задание 6
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    // Способ 1: через then
    wait().then(result => {
        console.log('Способ 1 (then):', result);
    });
    
    // Способ 2: возврат промиса для дальнейшей обработки
    return wait().then(result => {
        console.log('Способ 2 (возврат промиса):', result);
        return result;
    });
}

console.log('Вызов f():');
const promiseFromF = f();
promiseFromF.then(result => console.log('Результат из промиса, возвращённого f():', result));
// Внутри f мы не можем использовать await, но можем: использовать .then() для обработки результата; вернуть промис из функции
// Async-функция всегда возвращает промис, поэтому wait() можно использовать как обычный промис. 