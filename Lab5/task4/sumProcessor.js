function createSumProc(initialValue, fixedValue) {
    return new Promise((resolve, reject) => {

        if(typeof initialValue !== 'number' || typeof fixedValue !== 'number') {
            reject(new Error("Аргументы должны быть числами!"));
            return;
        }
        let currentValue = initialValue;
        let callCount = 0;
        const maxCalls = 5;

        console.log(`Начальное значение: ${currentValue}, постоянное: ${fixedValue}`);

        function processSum() {
            if(callCount >= maxCalls) {
                console.log(`Достигнуто максимальное количество вызовов (${maxCalls})`);
                resolve(currentValue);
                return;
            }
            callCount++;
            const sum = currentValue + fixedValue;
            console.log(`Вызов ${callCount}: ${currentValue} + ${fixedValue} = ${sum}`);
            currentValue = sum;

            setTimeout(processSum,2000);
        }
        setTimeout(processSum, 2000);
    });
}


console.log('== Успешный вариант ==');
createSumProc(5, 3)
    .then(finalResult => console.log(`Итоговый результат: ${finalResult}`))
    .catch(error => console.error(`Ошибка: ${error.message}`));

setTimeout(() => {
    console.log('\n== Вариант с ошибкой ==');
    createSumProc(5, 'vafly')
        .then(finalResult => console.log(`Итоговый результат: ${finalResult}`))
        .catch(error => console.error(`Ошибка: ${error.message}`));
}, 14000);