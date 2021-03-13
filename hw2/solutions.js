// Section 1
//1. Difference between a parameter and argument is that the parameters are the variables or names that you put into function. Then when you're calling the function you use arguments that are meant to plug into where the variables were and carry out that function.
//2. Difference between a return and a console.log is that a return allows you to store the function and return a value or the answer to the function later on if it's called. A console.log can tell you if the function will work or not, but it's not actually storing anything or returning any value when the function is called.

//Section 2
function checkPalindrome(str){
    //let str = str.toLowerCase(); trying to convert anything entered fro "str" into lowercase so that it works for both upper and lowercase letters.Currently still not working for uppercase.
    for (let i=0; i < str.length/2; i++){
      if (str[i] !== str[str.length - 1 - i]){
        return false;
      }
    }
    return true;
  }
  console.log(checkPalindrome("racecar"))

//Section 3: this function should add the numbers in the array 1+2+3+4+5+6=21 

function sumArray([]){
  let sum = 0;
  for (let i=0; i < sumArray; i++){
// this is to run through the array
   sum = i + sum;
//this is to add the array to the sum. 
}
  return sum
  console.log(sum);

}
sumArray([3,4])
//this function is not fully working. I'm not sure what's missing.

//Section 4: prime factor function

function prime(num){
  for (i = 2; i <=math.sqrt(num); i++){
  if (let num % i === 0){
    //This is saying that "num" is an unexpected identifier.
    return false;
  }else {
    console.log("prime")
    return true;
  }
  }
}
prime(64)
//I'm also not sure what's missing here.
//print prime factors
function printPrime(num) {
  let primeNumbers = [];
  let count = 0;
  for (i = 2; i <= num; i++) {
      if (prime(i)) {
        primeNumbers.push(i);
        count += 1;
      }
  }
  console.log(primeNumbers);
}
printPrime(97);
// I don't think is is running well because the prime function is not working well. 

//Section 5: Rock Paper Scissors
//pseudo code (I did not have time to do this section)
//the randomMove function would have an array that defines the variables (rock, paper, and scissors)
//I would then create a constant:
// const choices = [paper, scissorys, rock]
//I would then create a randomIndex that would have a math.floor (math.random() *choices.length)
//this would allow the choice to be returned at random.
//the rockPaperScissors function would accept a user move and a computer move (we'd have to define both variables and allow those options to be chosen at random.
//We'd also have to breakdown which move wins against which other move. 
//then we can test out some code. 

//Section 6
//1. Boolean
//2. object or string
//3. array
//4. array
//5. object with array
//6. object with array

//Section 7
let colorsArray = [ "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
console.log(colorsArray [4])

const me ={
  name: "Maria",
  'favorite food': "sushi",
  town: "NYC",
  hobby: "art",
  'favorite datatype': "objects"
}
console.log(me.hobby);

//Section 8
console.log(crazyObject.taco[1].salsa[5])
console.log(crazyObject.larry.quotes[0])
//Couldn't finish this section but will finish this weekend. 