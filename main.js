const plates = document.querySelector('#plates');
const fPiles= document.querySelector('#piles');
const fBtn = document.querySelector('#fBtn');
const fResult = document.querySelector('#fResult');

const n = document.querySelector('#nPlates');
const sumBtn = document.querySelector('#sumBtn');
const sumResult = document.querySelector('#sumResult');

fBtn.addEventListener('click', smallPile);
sumBtn.addEventListener('click', sumOfPiles);

function smallPile() {
  let n = parseInt(plates.value);
  let k = parseInt(fPiles.value);

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
  let counter = 0;
  let lastPile = 0;
  let previous = 0;
  let current = 0;

  if (k > Math.ceil(n / 2)) { // Check for invalid cases
    return false;
  }

  if (k === 1) {
    return n;
  }

  for (let i = 0; i < k; i++) {
    piles.push(0);
  }

  lastPile = piles.length - 1;
  index = lastPile;
  current = lastPile;
  previous = lastPile - 1;
  while (counter < n) {
    if (piles[previous] < (piles[current] - 1)) {
      if (current === 1) {
        piles[previous] += 1;
        current = lastPile;
        previous = lastPile - 1;
        counter++;
      } else {
        current = previous;
        piles[current] += 1;
        counter++;
        current--;
        previous = current - 1;
      }
    } else {
      if (current < lastPile) { // validate that current is less than next pile minus 1 when index is less than last pile
        if (piles[current] < (piles[current + 1] - 1)) {
          piles[current] += 1;
          counter++;
        } else {
          current = lastPile;
          previous = lastPile - 1;
        }
      } else {
        piles[current] += 1;
        counter++;
      }
    }
  }

  if (piles[0] === 0) {
    return false;
  }

  return piles[0];
}

function sumOfPiles() {
  let nPlates = parseInt(n.value);
  let sum = 0;
  let k = 1;
  
  while (smallest(nPlates, k)) {
    sum += smallest(nPlates, k);
    k++;
  }

  sumResult.textContent = `Result: ${sum}`;
}