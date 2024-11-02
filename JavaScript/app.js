const coin = document.getElementById('coin');
const tossBtn = document.getElementById('toss-btn');
const resetBtn = document.getElementById('reset-btn');
const resultMessage = document.getElementById('result-message');
const headsCountEl = document.getElementById('heads-count');
const tailsCountEl = document.getElementById('tails-count');
const totalTossCountEl = document.getElementById('totalToss-count');

// Initialize counts
let headsCount = 0;
let tailsCount = 0;
let totalTossCount = 0;


// Function to simulate a coin toss
function tossCoin() {
  tossBtn.disabled = true; 
  resultMessage.textContent = "Flipping the coin...";

  coin.classList.add('flipping'); 

  // Simulate the coin flip with a delay
  setTimeout(() => {
    const isHeads = Math.random() < 0.5;
    coin.classList.remove('heads', 'tails', 'flipping'); 

    if (isHeads) {
      coin.classList.add('heads');
      //coin.textContent = "🪙"; 
      coin.textContent = "Heads";
      resultMessage.textContent = "It's Heads!";
      headsCount++;
      headsCountEl.textContent = headsCount; 
    } else {
      coin.classList.add('tails');
      coin.textContent = "Tails";
      resultMessage.textContent = "It's Tails!";
      tailsCount++;
      tailsCountEl.textContent = tailsCount; 
    }
    totalTossCount++;
    totalTossCountEl.textContent = totalTossCount;
    tossBtn.disabled = false; 
  }, 1000); 
}


function resetGame() {
  headsCount = 0;
  tailsCount = 0;
  totalTossCount =0;
  totalTossCountEl.textContent = totalTossCount;
  headsCountEl.textContent = headsCount;
  tailsCountEl.textContent = tailsCount;
  coin.classList.remove('heads', 'tails');
  coin.textContent = "🪙"; 
  resultMessage.textContent = "Click Toss to Flip the Coin!";
}

// Event listeners
tossBtn.addEventListener('click', tossCoin);
resetBtn.addEventListener('click', resetGame);