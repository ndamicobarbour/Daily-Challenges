var number = Math.floor(Math.random()* 101)
console.log(number)
var boolean = 1

function guessCheck(){
  var guess = prompt("pick a number between 1 and 100")

      if (i >= 7) {
      console.log("You Lose");
    } else if(guess == number) {
      console.log ("You guessed correctly!")
      return boolean = 2
    } else if (guess > 100) {
      console.log ("Number is always between 1 & 100!")
    } else if (guess > number) {
      console.log ("You guessed too high.")
    } else if (guess < number) {
      console.log ("You guessed too low.")
    } else if (typeof guess == "string"){
        console.log("You must guess a number");}

}

var i = 0

function play () {
  while (boolean===1 && i < 7 ) {
    i = i + 1
    guessCheck()
    }
  }



play()
