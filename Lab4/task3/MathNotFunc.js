// Асинхронные функции fi(x)
function f1(x, notify) {
  setTimeout(() => {
    const result = x * x; 
    notify(result);
  }, Math.random() * 500);
}

function f2(x, notify) {
  setTimeout(() => {
    const result = 2 * x; 
    notify(result);
  }, Math.random() * 500);
}

function f3(x, notify) {
  setTimeout(() => {
    const result = -2; 
    notify(result);
  }, Math.random() * 500);
}

function f4(x, notify) {
  setTimeout(() => {
    const result = x + 5;
    notify(result);
  }, Math.random() * 500);
}

function f5(x, notify) {
  setTimeout(() => {
    const result = 3; 
    notify(result);
  }, Math.random() * 500);
}

function f6(x, notify) {
  setTimeout(() => {
    const result = x * 0; 
    notify(result);
  }, Math.random() * 500);
}


function computeF(x, n, finalCallback) {
  let functions = [f1, f2, f3, f4, f5, f6];
  let total = 0;
  let step = 0;

  function next(value) {
    if (step > 0) {
      total += value;
      console.log(`f${step} даёт значение ${value}, промежуточный результат ${total}`);
    }

    if (step < n) {
      step++;
      functions[step - 1](x, next);
    } else {
      finalCallback(total);
    }
  }

  next(0); 
}


console.log('n = 2');
computeF(3, 2, (res) => console.log('Ответ для F(x):', res));

setTimeout(() => {
  console.log('\nn = 4');
  computeF(3, 4, (res) => console.log('Ответ для F(x):', res));
}, 2000);

setTimeout(() => {
  console.log('\nn = 6');
  computeF(3, 6, (res) => console.log('Ответ для F(x):', res));
}, 4000);