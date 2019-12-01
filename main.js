const plates = document.querySelector('#plates');
const piles = document.querySelector('#piles');
const fBtn = document.querySelector('#fBtn');
const fResult = document.querySelector('#fResult');

const n = document.querySelector('#nPlates');
const sumBtn = document.querySelector('#sumBtn');
const sumResult = document.querySelector('#sumResult');

fBtn.addEventListener('click', smallPile);
sumBtn.addEventListener('click', sumOfPiles);

function smallPile() {
  let n = parseInt(plates.value);
  let k = parseInt(piles.value);

  const result = smallest(n, k);
  if (result) {
    // if possible to divide n into k 
    fResult.textContent = `Result ${result}`;
  } else {
    // if impossible to divide n into k
    fResult.textContent = `It is imposible to divide ${n} into ${k}`;
  }
}

function smallest(n, k) {
  let piles = [];
  let readyToSave = 0;
  let t = n;
  let counter = 3;

  if (k === 1) {
    return n;
  }
  readyToSave = Math.ceil(t / 2);
  t = t - readyToSave;
  if (readyToSave === t) {
    readyToSave += 1;
    t -= 1;
  }
  piles.unshift(readyToSave);
  piles.unshift(t);
  if (k === 2) {
    if (n > 2) {
      return piles[0];
    } else {
      return false;
    }
  }
  while (t > 1 && counter <= k) { 
    readyToSave = Math.ceil(t / 2);
    t = t - readyToSave;
    if (readyToSave === t) {
      readyToSave += 1;
      t -= 1;
    }
    piles[0] = readyToSave;
    piles.unshift(t);
    counter++;
  }

  for (let i = 0; i < Math.floor(piles.length / 2); i++) {
    while (piles[i] < (piles[i + 1] - 1) && piles[piles.length - 1 - i] > (piles[piles.length - 2 - 1] + 1)) {
      piles[i] += 1;
      piles[piles.length - 1 - i] -= 1;
    }
  }

  if (counter < k) {  // If impossible to divide n into k
    return null;
  }  

  return piles;  // If possible to divide n into k 
}

function sumOfPiles() {

}