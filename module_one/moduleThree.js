var randomNumber = require('./randomNumber.js');
var convert = require('./convertToDollars.js');

function randomConverter (min, max) {
  convert(randomNumber(min, max));
}

function accountBalance() {
  return ("Account balance: \n");
}

module.exports = {
  randomConverter: randomConverter,
  accountBalance: accountBalance
};
