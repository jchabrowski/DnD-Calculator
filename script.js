

/*REFACTORED. Trying to shorten function, isn't working because of scope?

let totalGold = +document.getElementById("totalGold").value;
let totalSilver = +document.getElementById("totalSilver").value;
let totalCopper = +document.getElementById("totalCopper").value;

let oGold = +document.getElementById("lootedGold").value;
let oSilver = +document.getElementById("lootedSilver").value;
let oCopper = +document.getElementById("lootedCopper").value;

let myGold;
let mySilver;
let myCopper;

*/

function addCoins() {

  /***** REFACTORED, won't work.
   * 
  let myGold = totalGold + oGold;
  let mySilver = totalSilver + oSilver;
  let myCopper = totalCopper + oCopper;

  totalGold = myGold;
  totalSilver = mySilver;
  totalCopper = myCopper;

  oGold = "1";
  oSilver = "";
  oCopper = "";
  ********/

  let myGold = +document.getElementById("lootedGold").value + +document.getElementById("totalGold").value;
  let mySilver = +document.getElementById("lootedSilver").value + +document.getElementById("totalSilver").value;
  let myCopper = +document.getElementById("lootedCopper").value + +document.getElementById("totalCopper").value;

  document.getElementById("totalGold").value = myGold;
  document.getElementById("totalSilver").value = mySilver;
  document.getElementById("totalCopper").value = myCopper;

  document.getElementById("lootedGold").value = "";
  document.getElementById("lootedSilver").value = "";
  document.getElementById("lootedCopper").value = "";
};




function subtractCoins() {
  let myGold = +document.getElementById("totalGold").value - +document.getElementById("lootedGold").value;
  let mySilver = +document.getElementById("totalSilver").value - +document.getElementById("lootedSilver").value;
  let myCopper = +document.getElementById("totalCopper").value - +document.getElementById("lootedCopper").value;

  document.getElementById("totalGold").value = myGold;
  document.getElementById("totalSilver").value = mySilver;
  document.getElementById("totalCopper").value = myCopper;

  document.getElementById("lootedGold").value = "";
  document.getElementById("lootedSilver").value = "";
  document.getElementById("lootedCopper").value = "";
};


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

////// Getting xp input, determining character level.

function inputXp(value) {
  let myXp = value;
  let level;
  let nextLevelXp;
  (function currentLevel() {
    if (myXp >= 0 && myXp < 300) {
      console.log('level 1 with ' + myXp + ' exp points');
      inputXp.level = 1;
      inputXp.nextLevelXp = 300;
    } else if (myXp >= 300 && myXp < 900) {
      console.log('level 2 with ' + myXp + ' exp points');
      inputXp.level = 2;
      inputXp.nextLevelXp = 900;
    } else if (myXp >= 900 && myXp < 2700) {
      console.log('level 3 with ' + myXp + ' exp points');
      inputXp.level = 3;
      inputXp.nextLevelXp = 2700;
    } else if (myXp >= 2700 && myXp < 6500) {
      console.log('level 4 with ' + myXp + ' exp points');
      inputXp.level = 4;
      inputXp.nextLevelXp = 6500;
    } else if (myXp >= 6500 && myXp < 14000) {
      console.log('level 5 with ' + myXp + ' exp points');
      inputXp.level = 5;
      inputXp.nextLevelXp = 14000;
    } else if (myXp >= 14000 && myXp < 23000) {
      console.log('level 6 with ' + myXp + ' exp points');
      inputXp.level = 6;
      inputXp.nextLevelXp = 23000;
    } else if (myXp >= 23000 && myXp < 34000) {
      console.log('level 7 with ' + myXp + ' exp points');
      inputXp.level = 7;
      inputXp.nextLevelXp = 34000;
    } else if (myXp >= 34000 && myXp < 48000) {
      console.log('level 8 with ' + myXp + ' exp points');
      inputXp.level = 8;
      inputXp.nextLevelXp = 48000;
    } else if (myXp >= 48000 && myXp < 64000) {
      console.log('level 9 with ' + myXp + ' exp points');
      inputXp.level = 9;
      inputXp.nextLevelXp = 64000;
    } else if (myXp >= 64000 && myXp < 85000) {
      console.log('level 10 with ' + myXp + ' exp points');
      inputXp.level = 10;
      inputXp.nextLevelXp = 85000;
    } else if (myXp >= 85000 && myXp < 100000) {
      console.log('level 11 with ' + myXp + ' exp points');
      inputXp.level = 11;
      inputXp.nextLevelXp = 100000;
    } else if (myXp >= 100000 && myXp < 120000) {
      console.log('level 12 with ' + myXp + ' exp points');
      inputXp.level = 12;
      inputXp.nextLevelXp = 120000;
    } else if (myXp >= 120000 && myXp < 140000) {
      console.log('level 13 with ' + myXp + ' exp points');
      inputXp.level = 13;
      inputXp.nextLevelXp = 140000;
    } else if (myXp >= 140000 && myXp < 165000) {
      console.log('level 14 with ' + myXp + ' exp points');
      inputXp.level = 14;
      inputXp.nextLevelXp = 165000;
    } else if (myXp >= 165000 && myXp < 195000) {
      console.log('level 15 with ' + myXp + ' exp points');
      inputXp.level = 15;
      inputXp.nextLevelXp = 195000;
    } else if (myXp >= 195000 && myXp < 225000) {
      console.log('level 16 with ' + myXp + ' exp points');
      inputXp.level = 16;
      inputXp.nextLevelXp = 225000;
    } else if (myXp >= 225000 && myXp < 265000) {
      console.log('level 17 with ' + myXp + ' exp points');
      inputXp.level = 17;
      inputXp.nextLevelXp = 265000;
    } else if (myXp >= 265000 && myXp < 305000) {
      console.log('level 18 with ' + myXp + ' exp points');
      inputXp.level = 18;
      inputXp.nextLevelXp = 305000;
    } else if (myXp >= 305000 && myXp < 355000) {
      console.log('level 19 with ' + myXp + ' exp points');
      inputXp.level = 19;
      inputXp.nextLevelXp = 355000;
    } else if (myXp >= 355000) {
      console.log('Congratulations! You are level 20 with ' + myXp + ' exp points');
      inputXp.level = 20;
    };
  })();


  // Display text with calculated level difference.
  (function parseLevel() {
    
    document.getElementById("calculatedXp").classList.add("fadeClass");
    //document.getElementById("XpP").classList.add("fadeClass");
    if (inputXp.level < 20 && inputXp.nextLevelXp - myXp > 1) {
      document.getElementById("XpP").innerHTML = 'You are currently level ' + inputXp.level + ' with ' + myXp + ' experience points. Given that, you need ' + (inputXp.nextLevelXp - myXp) + ' more experience points to advance to level ' + (inputXp.level + 1) + '.'
      //
    } else if (inputXp.level < 20 && inputXp.nextLevelXp - myXp === 1) {
      document.getElementById("XpP").innerHTML = 'You are currently level ' + inputXp.level + ' with ' + myXp + ' experience points. Given that, you need only one more experience point to advance to level ' + (inputXp.level + 1) + '.'
    } else if (inputXp.level === 20) {
      document.getElementById("XpP").innerHTML = 'Congratulations! You reached level 20!'
    };
  })();
  
  document.getElementById("calculatedXp").addEventListener('animationend', () => {
    console.log('transition ended.');
    document.getElementById("calculatedXp").classList.remove("fadeClass");
    //document.getElementById("calculatedXp").style.display = "initial";
    document.getElementById("XpP").innerHTML = "";
  });
};