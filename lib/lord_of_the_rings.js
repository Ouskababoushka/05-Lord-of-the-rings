

const isGood = (soldierType) => {
  if (soldierType === "Hobbits" || soldierType === "Elves" || soldierType === "Dwarves" || soldierType === "Eagles") {
    return true;
  }
  return false;
};

const buildSoldierObject = (battlefield) => {
  const myBattlefield = {};
  battlefield = battlefield.split(",");

  battlefield.forEach((element) => {
    const key = element.split(":")[0];
    const value = parseInt(element.split(":")[1], 10);

    myBattlefield[key] = value;
  });
  return myBattlefield;
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
  const soldiers = buildSoldierObject(battlefield);

  let sumGood = 0;
  let sumEvil = 0;

  Object.entries(soldiers).forEach((entry) => {
    const [soldier, value] = entry;
    if (isGood(soldier) === true) {
      sumGood += value;
    } else {
      sumEvil += value;
    }
  });

  let win = "";
  if (sumGood > sumEvil) {
    win = "Good";
  }

  if (sumGood < sumEvil) {
    win = "Evil";
  }

  if ((sumGood === sumEvil) || ((sumGood + sumEvil) === 0)) {
    win = "Tie";
  }

  return win;
};

const epicBattle = "Hobbits:4,Dwarves:1,Elves:1,Goblins:100,Uruk-hai:1";
whoWinsTheWar(epicBattle);

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
