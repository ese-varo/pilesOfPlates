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
  let index = 0;
  let lastPile = 0;
  let firstPile = 0;
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
  current = piles[lastPile];
  previous = piles[lastPile - 1];
  while (counter < k) {
    if (previous < current - 1) {
      if (index === 1) {
        previous += 1;
        current = piles[lastPile];
        previous = piles[lastPile - 1];
      } else {
        current = previous;
        current += 1;
        index--;
        previous = piles[index - 1];
      }
    }
  }
}

function sumOfPiles() {

}