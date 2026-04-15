let width = 0;
const interval = setInterval(() => {
    width += 2;
    document.querySelector('.loader-bar').style.width = width + '%';
    if (width >= 100) {
        clearInterval(interval);
        document.getElementById('loader').style.display = 'none';
        document.getElementById('page').classList.remove('invisible');
    }
}, 40);