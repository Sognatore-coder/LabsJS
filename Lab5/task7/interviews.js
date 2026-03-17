function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processTask(candidateName, taskNumber, prepareTime,defenseTime) {
   console.log(`${candidateName} started the ${taskNumber} task.`);
   await sleep(prepareTime * 1000);
   
   console.log(`${candidateName} moved on to the defense of the ${taskNumber} task.`);
   await sleep(defenseTime * 1000);

   console.log(`${candidateName} completed the ${taskNumber} task.`)
}

async function processCandidate(candidate) {
    const [name, prepare1, defense1, prepare2, defense2] = candidate; // деструктуризация массива

    await processTask(name,1,prepare1,defense1);

    console.log(`${name} is resting`);
    await sleep(5000);

    await processTask(name,2,prepare2,defense2);
}

async function interviews(candidates) {
    const promises = candidates.map(candidate => processCandidate(candidate));
    await Promise.all(promises);    
}

const candidates = [['Ivan',5,2,7,2], ['John',3,4,5,1], ['Sophia',4,2,5,1]];

console.log("Собеседования");
interviews(candidates).then(()=> {
    console.log("Все собеседования завершены!");
});