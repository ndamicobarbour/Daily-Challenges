// Highest Number Function

largestNumArray = [2,4,6,8,532]
var max = 0

function largestNum (x) {
  x.forEach( function(el){ // Go through each element and reset max if element is larger than max
    if (el > max){
      max = el
    }
  })
  console.log(max) // after for each has iteretad each element in array x, console log new max
}

// Lowest Number function

lowestNumArray = [6,-50,0,200]
var min = 1000

function lowestNum (x){
  x.forEach( function (el){
    if(el < min){
      min = el
    }
  })
  console.log(min)
}

// Smallest Number Function

var small = 1000

function smallestNum (x){
  x.forEach( function (el){
    if(Math.abs(el) < small)
    small = el
  })
  console.log(small);
}

// Sum of Array Function

var sum = 0
function arraySum (x){
  x.forEach(function (el){
    sum = sum + el
    })
  console.log(sum);
}

// Mean of Array function

var mean = 0

function arrayMean(x){
  mean=0
  x.forEach(function(el){
    mean = mean + el
  })
  mean=mean/x.length
  console.log(mean)
}

//Index of Highest Number

var indexMax = 0

function indexOfLargestNum (x) {
  indexMax = 0
  x.forEach( function(el){
    if (el > indexMax){
      indexMax = el
    }
  })
  console.log(x.indexOf(indexMax))
}

// String of Sibling and Parents

var siblings = ["Alex", "Simone", "Cody"]
var parents = ["Angela", "Dale", "Trecia"]

siblings.sort() // sorts siblings alphabetically
parents.sort().reverse() // sorts parents in revese alphabetical order
siblings.concat(parents).sort() // sorts both lists alphabetically
siblings.concat(parents).sort().reverse() // sorts both lists in reverse alphabetical order

function isNamePresent (x) {
  if (siblings.concat(parents).indexOf(x) > -1) {
    console.log("Name is present")
  } else {
    console.log("Name is not present")
  }
}
// determines if argument of function is present in list, and tells user if that name is in either list

// Return Even Numbers

function evenElements(array){
  var evenOnly = []
  array.forEach( function (el){
    if (el % 2 === 0){
      evenOnly.push(el)
    }
  })
  console.log(evenOnly);
}

// Return Odd Numbers

function oddElements(array){
  var oddOnly = []
  array.forEach( function (el){
    if (el % 2 !== 0){
      oddOnly.push(el)
    }
  })
  console.log(oddOnly);
}

// function that takes array and function and spits out array with each element operated on by function

function  mapArray(array,funct) {
  var newArray = []
  array.forEach( function (el) {
    var p = funct(el)
    newArray.push(p)
  })
  console.log(newArray)
}

// function that takes an array and function and returns an array where every item in array that was operated on by function returns true

function filterArray(array, funct){
  var newArray = []
  array.forEach( function (el){
    if(funct(el) == true){
      newArray.push(el)
    }
  })
  console.log(newArray);
}

// Magic 8

var answers = ["Yup!","Fuhgeddaboudit","Maybe","Ask:what would yo momma do?",",Ask:what would an Australian do, then do the opposite", "Your answer here"]
function userQs (){
  prompt("what is your question")
  alert (answers[Math.floor(Math.random()*6)])
}

function userQsStop (){
  var stop = 1
  while (stop===1) {
    var input = prompt("what is your question")
    if (input === "STOP") {
      stop=2
    } else {
    alert (answers[Math.floor(Math.random()*6)])
    }
  }
}

function userQuesStop(){
  var stop = 1
  while(stop ===1){
    var two = prompt("what is your question")
    if(two === "stop"){
      stop = 2
    }else{
      alert (answers[Math.floor(Math.random()*6)])
    }
  }
}

//For to While

for (var i=0; i<10; i++) { console.log(i); }
while (x < 10) {
    console.log("x is " + x)
    x=x+1
}
