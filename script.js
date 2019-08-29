
function hideButtonPressed() {
  let myGold = +document.getElementById("lootedGold").value + +document.getElementById("totalGold").value;
  let mySilver = +document.getElementById("lootedSilver").value + +document.getElementById("totalSilver").value;
  let myCopper = +document.getElementById("lootedCopper").value + +document.getElementById("totalCopper").value;


  document.getElementById("totalGold").value = myGold;
  document.getElementById("totalSilver").value = mySilver;
  document.getElementById("totalCopper").value = myCopper;

  document.getElementById("lootedGold").value = 0;
  document.getElementById("lootedSilver").value = 0;
  document.getElementById("lootedCopper").value = 0;
};

function subtractCoins() {
  let myGold = +document.getElementById("totalGold").value - +document.getElementById("lootedGold").value;
  let mySilver = +document.getElementById("totalSilver").value - +document.getElementById("lootedSilver").value;
  let myCopper = +document.getElementById("totalCopper").value - +document.getElementById("lootedCopper").value;

  document.getElementById("totalGold").value = myGold;
  document.getElementById("totalSilver").value = mySilver;
  document.getElementById("totalCopper").value = myCopper;

  document.getElementById("lootedGold").value = 0;
  document.getElementById("lootedSilver").value = 0;
  document.getElementById("lootedCopper").value = 0;
}


//function to keep the clicked button while hiding the other one
/*
function coinButton(clicked) {
  if (clicked === 'obt-btn') {
    console.log('I got something.')
    document.getElementById('obt-div').classList.add('hidden');
    document.getElementById('spent-div').classList.add('seen');
  } else if (clicked === 'spent-btn') {
    console.log('I probably spent something.');
    document.getElementById('spent-div').classList.add('hidden');
    document.getElementById('obt-div').classList.add('seen');
  }
}

*/
