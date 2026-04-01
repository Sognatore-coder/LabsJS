let ageTable = document.getElementById('age-table');
let labelsInTable = ageTable.querySelectorAll('label');
let firstTd = ageTable.querySelector('td');
let searchForm = document.querySelector('form[name="search"]');
let firstInputInForm = searchForm.querySelector('input');
let lastInputInForm = searchForm.querySelector('input:last-child');

console.log(ageTable);
console.log(labelsInTable);
console.log(firstTd);
console.log(searchForm);
console.log(firstInputInForm);
console.log(lastInputInForm);