let promise = new Promise(function(resolve, reject) {
resolve(1);
setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);

// Промис может быть выполнен или отклонён только один раз — дальнейшие вызовы resolve() или reject() не повлияют на состояние промиса.
// Первый вызов resolve() сразу устанавливает значение промиса в 1, второй вызов игнорируется, т.к промис уже находится в состоянии "fulfilled" (выполнен)