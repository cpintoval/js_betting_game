$(document).ready(function() {

  $('.start-page').on('click', 'button', function() {
    $('.start-page').toggle("slow");
    $('.game-page').toggle("slow");
  });

  $('.game-page').on('click', 'button', function() {
    var cash = parseInt($('.cash').text());
    if (cash > 0) {
      var bet = parseInt($('#bet').val());
      if (bet != NaN && bet >= 5 && bet <= 10) {
        var guess = parseInt($('#guess').val());
        if (guess != NaN && guess >= 1 && guess <= 10) {
          var number = Math.floor((Math.random() * 10) + 1);
          if (guess == number) {
            cash += bet;
            console.log(cash);
            alert("You guessed correctly and doubled your bet!");
          }
          else if (guess + 1 == number || guess - 1 == number) {
            alert("You're off by 1 and get to keep your bet.");
          }
          else {
            cash -= bet;
            console.log(cash);
            alert("Wrong guess. Lost your bet.");
          }
          $('.cash').text(cash);
        }
        else {
          alert("You need to guess a number between 1 and 10.");
        }
      }
      else {
        alert("You need to set a bet between $5 and $10.");
      }
    }
    else {
      alert("You're broke dude!")
    }
  });

});