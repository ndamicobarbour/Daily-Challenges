// What number's bigger?

function greaterNum(x, y){
    if (x > y){
      return x
    } else if (y > x){
      return y
    } else {return "they are equal"
  }
}

// The World Translator

function helloWorld(lang){
  if (lang === "es"){
    console.log("hola mundo")
  } else if(lang === "fr"){
    console.log("bonjour le monde")
  } else {console.log ("Hello World")}
}

// The Grade Assigner

function assignGrade(x){
  if(90<=x){
   return "A"
 } else if(80<=x && x<90){
     return "B"
 } else if(70<=x && x<80){
     return "C"
 } else if(60<=x && x<70){
    return "D"
 } else {
   return "F"}

}

// The Pluralizer

function pluralize(number, string) {
  if (string === "sheep" || string === "fish" || string === "moose") {
    return number + " " + string
  } else if (number === 1) {
    return number + " " + string
  } else {
    return number + " " + string + "s"
  }
}

// The Odd and Even

function oddEven(x) {
  if (x>15) {
    return "Must be between 0 and 15"
  } else if ((x/2)=== Math.floor(x/2)) {
    return x + " is even"
  } else {
    return x + " is odd"
  }
}

// Fizz Buzz

for (i=1; i<100; i++) {
  if (((i/3)=== Math.floor(i/3)) && ((i/5)=== Math.floor(i/5))) {
    console.log ("Fizz Buzz")
  } else if ((i/3)=== Math.floor(i/3)) {
    console.log("Fizz")
  } else if ((i/5)=== Math.floor(i/5)) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}

// Reverse Challenge

function reverseString (str){
    var splitString = str.split(" "); //split by words
    for (var i = 0; i < splitString.length; i++){ //go through each word
      if (splitString[i].length > 4) { //affect if word is larger than 4
        splitString[i] = splitString[i].split("").reverse().join(""); //
      }
    } console.log (splitString.join(" "))
}
