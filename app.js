// Get global access to all inputs / divs here (you'll need them later)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tipAmount = Number(tipInput.value) / 100;
  const tipPercent = bill * tipAmount;
  const total = bill + tipPercent;
  const perPersonTotal = total / numberOfPeople;

  perPersonTotalDiv.innerText = perPersonTotal;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  numberOfPeople += 1;

  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

// ** Splits the bill between fewer people **

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};
