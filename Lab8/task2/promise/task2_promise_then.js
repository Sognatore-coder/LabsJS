const PROXY = 'https://cors-anywhere.herokuapp.com/';

function request(url, callback) {
    const proxyUrl = PROXY + url;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', proxyUrl);
    xhr.onload = () => {
        if (xhr.status === 200) {
            try {
                callback(null, JSON.parse(xhr.responseText));
            } catch (e) {
                callback(null, xhr.responseText);
            }
        } else {
            callback(`Ошибка ${xhr.status}`, null);
        }
    };
    xhr.onerror = () => callback('Сетевая ошибка', null);
    xhr.send();
}

function requestPromise(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
}

const apis = [
    { name: '🐱 Аниме (Jikan)', url: 'https://api.jikan.moe/v4/anime?q=naruto&limit=1' },
    { name: '💱 Курс валют (Frankfurter)', url: 'https://api.frankfurter.dev/v2/rates' },
    { name: '📚 Книги (Open Library)', url: 'https://openlibrary.org/search.json?q=javascript&limit=1' },
    { name: '💰 Криптовалюта (CoinGecko)', url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd' },
    { name: '🔒 Безопасность (Cloudflare Trace)', url: 'https://www.cloudflare.com/cdn-cgi/trace' }
];

console.log('Последовательные запросы (промисы, then)');

let chain = Promise.resolve();
apis.forEach(api => {
    chain = chain
        .then(() => {
            console.log(`${api.name} ...`);
            return requestPromise(api.url);
        })
        .then(data => console.log(`${api.name}:`, data))
        .catch(err => console.error(`${api.name}:`, err));
});