function showFrame(id) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('invisible');
    });
    document.getElementById(id).classList.remove('invisible');
    updateStepIndicator(id);
}

function updateStepIndicator(currentFrameId) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, idx) => step.classList.remove('active'));
    if (currentFrameId === 'frame_0') steps[0].classList.add('active');
    if (currentFrameId === 'frame_1') steps[1].classList.add('active');
    if (currentFrameId === 'frame_2') steps[2].classList.add('active');
    if (currentFrameId === 'frame_3') steps[3].classList.add('active');
    if (currentFrameId === 'frame_4') steps[3].classList.add('active');
}


const countries = ['Россия', 'США', 'Германия', 'Франция', 'Италия', 'Испания', 'Китай', 'Япония', 'Канада', 'Бразилия'];
const countrySelect = document.getElementById('country');
countries.forEach(c => {
    const option = document.createElement('option');
    option.value = c;
    option.textContent = c;
    countrySelect.appendChild(option);
});

// Навигация
document.getElementById('startRegBtn').onclick = () => showFrame('frame_1');
document.getElementById('cancelBtn').onclick = () => showFrame('frame_0');
document.getElementById('backToPersonal').onclick = () => showFrame('frame_1');
document.getElementById('backToPhone').onclick = () => showFrame('frame_2');

// ---- Валидация шага 1 ----
const inputs1 = ['firstName', 'lastName', 'email', 'address', 'password', 'confirmPassword'];
inputs1.forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        const allFilled = inputs1.every(i => document.getElementById(i).value.trim() !== '');
        const pwd = document.getElementById('password').value;
        const confirm = document.getElementById('confirmPassword').value;
        const valid = allFilled && pwd === confirm && pwd.length >= 4;
        document.getElementById('nextToPhone').disabled = !valid;
    });
});
document.getElementById('nextToPhone').onclick = () => showFrame('frame_2');

// Телефон
const phoneInput = document.getElementById('phone');
const sendCodeBtn = document.getElementById('sendCodeBtn');
const codeSection = document.getElementById('codeSection');
const verificationCode = document.getElementById('verificationCode');
const checkCodeBtn = document.getElementById('checkCodeBtn');
const nextToPayment = document.getElementById('nextToPayment');

phoneInput.addEventListener('input', () => {
    sendCodeBtn.disabled = phoneInput.value.trim().length < 10;
});
sendCodeBtn.onclick = () => {
    codeSection.classList.remove('invisible');
    checkCodeBtn.disabled = false;
};
verificationCode.addEventListener('input', () => {
    checkCodeBtn.disabled = verificationCode.value.length !== 4;
});
checkCodeBtn.onclick = () => {
    if (verificationCode.value.length === 4) {
        nextToPayment.disabled = false;
        alert('Код подтверждён (демо)');
    }
};
nextToPayment.onclick = () => showFrame('frame_3');

// Карта и конец регистрации
const cardParts = document.querySelectorAll('.card-part');
cardParts.forEach((part, idx) => {
    part.addEventListener('input', (e) => {
        if (part.value.length === 4 && idx < cardParts.length - 1) {
            cardParts[idx + 1].focus();
        }
    });
});
const expiry = document.getElementById('expiry');
const cvv = document.getElementById('cvv');
const agree = document.getElementById('agreeTerms');
const finishBtn = document.getElementById('finishReg');

function checkCardForm() {
    const allPartsFilled = [...cardParts].every(p => p.value.length === 4);
    const expiryValid = expiry.value.match(/^\d{2}\/\d{2}$/);
    const cvvValid = cvv.value.length === 3;
    finishBtn.disabled = !(allPartsFilled && expiryValid && cvvValid && agree.checked);
}
cardParts.forEach(p => p.addEventListener('input', checkCardForm));
expiry.addEventListener('input', checkCardForm);
cvv.addEventListener('input', checkCardForm);
agree.addEventListener('change', checkCardForm);

finishBtn.onclick = () => showFrame('frame_4');

// ---- Показываем приветствие ----
showFrame('frame_0');