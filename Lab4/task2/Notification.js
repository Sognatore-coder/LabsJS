// Асинхронные функции
function readConfigNot(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

function doQueryNot (statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function httpGetNot (url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function readFileNot (path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

function callback () {
    console.log('It is done!')
}

console.log('start');

function step1() {
    readConfigNot('myConfig', step2);
}

function step2() {
    doQueryNot('select * from cities', step3);
}

function step3() {
    httpGetNot('http://google.com', step4);
}

function step4() {
    readFileNot('README.md', ()=>{
        callback();
        console.log('end');
    });
}

step1();