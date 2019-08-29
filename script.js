

function buttonPressed() {
  let myGold = +document.getElementById("lootedGold").innerHTML + +document.getElementById("totalGold").innerHTML;
  let mySilver = +document.getElementById("lootedSilver").innerHTML + +document.getElementById("totalSilver").innerHTML;
  let myCopper = +document.getElementById("lootedCopper").innerHTML + +document.getElementById("totalCopper").innerHTML;

  document.getElementById("totalGold").innerHTML = myGold;
  document.getElementById("totalSilver").innerHTML = mySilver;
  document.getElementById("totalCopper").innerHTML = myCopper;

  document.getElementById("lootedGold").innerHTML = 0;
  document.getElementById("lootedSilver").innerHTML = 0;
  document.getElementById("lootedCopper").innerHTML = 0;
};
