$(document).ready(function() {

  // Game logic is implemented once the page finishes loading.
  var gameLogic = function() {

    var cash = 100;
    while (cash > 0) {
      var bet = parseInt(prompt("Place a bet between $5 and $10 - Cash: $" + cash));
      if (bet < 5) {
        alert("Bet too low. Try again.");
      }
      else if (bet > 10) {
        alert("Bet too high. Try again.");
      }
      else {
        var number = Math.floor((Math.random() * 10) + 1);
        var guess = parseInt(prompt("Enter your guess for a number between 1 and 10."));
        if (guess == number) {
          cash += bet;
          alert("You guessed correctly and doubled your bet!");
        }
        else if (guess + 1 == number || guess - 1 == number) {
          alert("You're off by 1 and get to keep your bet.");
        }
        else {
          cash -= bet;
          alert("Wrong guess. Lost your bet.");
        }
      }
    }
    alert("You ran out of cash. Thanks for playing!")

  };

  gameLogic();

});