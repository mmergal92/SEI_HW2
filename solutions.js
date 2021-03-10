// Section 1
//1. Difference between a parameter and argument is that the parameters are the variables or names that you put into function. Then when you're calling the function you use arguments that are meant to plug into where the variables were and carry out that function.
//2. Difference between a return and a console.log is that a return allows you to store the function and return a value or the answer to the function later on if it's called. A console.log can tell you if the function will work or not, but it's not actually storing anything or returning any value when the function is called.

//Section 2
function checkPalindrome(str){
    //let str = str.toLowerCase(); trying to convert anything entered fro "str" into lowercase so that it works for both upper and lowercase letters.
    for (let i=0; i < str.length/2; i++){
      if (str[i] !== str[str.length - 1 - i]){
        return false;
      }
    }
    return true;
  }
  console.log(checkPalindrome("racecar"))