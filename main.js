const plates = document.querySelector('#plates');
const piles = document.querySelector('#piles');
const fBtn = document.querySelector('#fBtn');
const fResult = document.querySelector('#fResult');

const n = document.querySelector('#n');
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
    fResult.textContent = `Result: ${result}`;
  } else {
    // if impossible to divide n into k
    fResult.textContent = `It is imposible to divide ${n} into ${k}`;
  }
}

function smallest(n, k) {

}

function sumOfPiles(n) {

}


