const PROXY = 'https://cors-anywhere.herokuapp.com/';

function request(url, callback) {
    const proxyUrl = PROXY + url;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', proxyUrl);
    xhr.onload = () => {
        if (xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                callback(null, data);
            } catch (e) {
                callback(null, xhr.responseText);
            }
        } else {
            callback(`Ошибка ${xhr.status}`, null);
        }
    };
    xhr.onerror = () => callback('Сетевая ошибка (CORS/прокси)', null);
    xhr.send();
}

const apis = [
    { name: '🐱 Аниме (Jikan)', url: 'https://api.jikan.moe/v4/anime?q=naruto&limit=1' },
    { name: '💱 Курс валют (Frankfurter)', url: 'https://api.frankfurter.dev/v2/rates' },
    { name: '📚 Книги (Open Library)', url: 'https://openlibrary.org/search.json?q=javascript&limit=1' },
    { name: '💰 Криптовалюта (CoinGecko)', url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd' },
    { name: '🔒 Безопасность (Cloudflare Trace)', url: 'https://www.cloudflare.com/cdn-cgi/trace' }
];

console.log('Последовательные запросы (колбэки)');

function runSequential(index) {
    if (index >= apis.length) {
        console.log('✅ Все запросы выполнены!');
        return;
    }
    const api = apis[index];
    console.log(`Запрос ${index + 1}: ${api.name} ...`);
    request(api.url, (err, data) => {
        if (err) {
            console.error(`${api.name}:`, err);
        } else {
            console.log(`${api.name}:`, data);
        }
        setTimeout(() => runSequential(index + 1), 3000);
    });
}

runSequential(0);