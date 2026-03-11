function getVowelCount(str) {
    const vowels = 'aeiouy';
    let count = 0;
    for(let char of str) {
        if(vowels.includes(char)) count++;
    }
    return count;
}

function getConsonantsString(str) {
  const vowels = 'aeiouy';
  let result = '';
  for (let char of str) {
    if (!vowels.includes(char)) result += char;
  }
  return result;
}

function ask_password(login, password, success, failure) {
  login = login.toLowerCase();
  password = password.toLowerCase();

  const loginConsonants = getConsonantsString(login);
  const passwordConsonants = getConsonantsString(password);
  const loginVowelCount = getVowelCount(login);
  const passwordVowelCount = getVowelCount(password);

  const vowelCorrect = passwordVowelCount === 3;
  const consonantCorrect = passwordConsonants === loginConsonants;

  if (vowelCorrect && consonantCorrect) {
    success(login);
  } else if (!vowelCorrect && !consonantCorrect) {
    failure(login, 'Everything is wrong');
  } else if (!vowelCorrect) {
    failure(login, 'Wrong number of vowels');
  } else {
    failure(login, 'Wrong consonants');
  }
}

function main(login, password) {
  ask_password(
    login,
    password,
    (login) => console.log(`Привет, ${login}!`),
    (login, error) =>
      console.log(
        `Кто-то пытался притвориться пользователем ${login}, но в пароле допустил ошибку: ${error.toUpperCase()}.`
      )
  );
}

// Примеры использования
main('login', 'aaalgn');   
main('login', 'luagon');   
main('login', 'aallgn');   
main('login', 'aaa123');  
main('login', '123456');   