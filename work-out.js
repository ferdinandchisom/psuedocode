/*2. Password Strength Checker
Create a function that checks the strength of a password. A strong password has at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.
Example Input: "Passw0rd!"
 Example Output: "Strong Password" */

 /*psuedocode
if password < 8 reture weak
else: return strong */


function passwordchecker(password){

    let output = "";
    if (value <= upper){
      output = "you need at least one uppercase letter";
    }
    if (password.length < 8){
      output = "oh this is a weak password";
    }else{
      output = "well done your password is strong please contiune";
    }
    return output;
   }
   console.log(passwordchecker("requiredpassword"));
  
  
  
  
  /*3. Palindrome Checker
  Write a function that checks whether a given word or phrase (ignoring spaces and capitalization) is a palindrome.
  Example Input: "Racecar"
   Example Output: True */
  
   
  
  /*4. Prime Number Checker
  Create a function that takes a number as input and returns True if it's prime, otherwise False.
  Example Input: 17
   Example Output: True */
   //pesudocode
   // if number is less than a prime  output "false"
   // if number is = to prime output "true"
  
   function primeNumber(num){
    if (num < 2){
      output = "false";
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
      if (num !=primeNumber ){
        output = "false";
      }
  
    }
    return true;
   }
   console.log(primeNumber(17));
  
  /*5. Fibonacci Sequence Generator
  Write a function that generates the first n numbers in the Fibonacci sequence.
  Example Input: 5
   Example Output: [0, 1, 1, 2, 3] */
  
   function fibonacci(n){
    let a = 0; b = 1, fib = [a, b];
    for (let i = 2; i < n; i++){
     [a,b] = [b, a + b];
     fib.push(b);
    }
    return fib;
   }
   console.log(fibonacci(5)); 
   
  
  
  /*6. Word Counter
  Write a function that takes a sentence as input and returns the number of words in it.
  Example Input: "Hello world! This is fun."
   Example Output: 5 */
   // psuedocode
   // name of sentence inputed 
   // return sentence.length
   function sentence(senInstart){
    return senInstart.split('').length
   }
   console.log(sentence("hello world"));
  
  
  
  /*7. Temperature Converter
  Create a function that converts temperatures between Celsius, Fahrenheit, and Kelvin based on user input.
  Example Input: 100, "C", "F"
   Example Output: "212°F" */
  
  function temperatureConverter( value, fromunit, tounit){
    if(fromunit === tounit){
      output = `${value} ${tounit}`;
      const Converter = {
        C:{ F: v => v * 9/5 + 32, K: v => v + 273.15},
        F:{C: v => (v - 32) * 5/9, K: v => (v - 32) * 5/9 + 273.15},
        K:{C: v => v - 273.15, F: v => (v - 273.15)* 9/5 + 32}, 
      
      };
    }
    return Converter[fromunit]?[tounit]?`${Converter[fromunit][tounit](value).toFixed(2)}${tounit}`:
  }
  console.log(temperatureConverter(""));

  
  
  /*8. Even and Odd Number Separator
  Write a function that takes a list of numbers and separates them into two lists: one for even numbers and one for odd numbers.
  Example Input: [1, 2, 3, 4, 5, 6]
   Example Output:
  Even: [2, 4, 6]  
  Odd: [1, 3, 5] */
  
  const EvenandOdd = numbers => ({
    even: numbers.filter(n => n % 2 === 0),
    odd: numbers.filter(n => n % 2 !== 0)
   });
   console.log(EvenandOdd([1,2,3,4,5,6,7,8,9,10, 11]));
  
  /*9. Factorial Calculator
  Write a function that calculates the factorial of a given number using recursion.
  Example Input: 5
   Example Output: 120 */
  
   function factorial(n){
    if (n === 0 || n === 1){
      return 1;
    }else {
      return n * factorial(n - 1);
    }
   }
   console.log(factorial(5));
  
  /*10. Vowel and Consonant Counter
  Create a function that takes a word and counts the number of vowels and consonants.
  Example Input: "hello"
   Example Output:
  Vowels: 2  
  Consonants: 3 */
  
  
  /*11. Simple To-Do List
  Write a function that allows a user to add, remove, and view tasks in a to-do list.
  Example Input:
  add("Buy groceries")  
  add("Do laundry")  
  view() 
  
  Example Output:
  1. Buy groceries  
  2. Do laundry  */
  
  
  /*12. Currency Converter
  Write a function that converts an amount from one currency to another based on a given exchange rate.
  Example Input: 100, "USD", "EUR", 0.92
   Example Output: "92 EUR" */
  
  /*13. Reverse a String
  Create a function that reverses a given string.
  Example Input: "hello"
   Example Output: "olleh" */
  
   function stringReverse(ring){
    let string = ring.split('');
    let reverse = string.reverse();
    let result = reverse.join('');
    return result;
   }
  console.log(stringReverse("world!"));
  
  /*14. Shopping Cart Total
  Write a function that takes a list of item prices and returns the total price, including a 10% discount if the total exceeds $100.
  Example Input: [20, 30, 50, 10]
   Example Output: "Total: $99" */
  
  /*15. Random Dice Roll Simulator
  Create a function that simulates rolling a six-sided die and returns a random number between 1 and 6.
  Example Output: 🎲 4 */
  function toDie(){
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * 6;
    const flooredNumber = Math.floor(scaledNumber);
    const result = flooredNumber + 1;
    return result;
  }
  console.log(toDie());
  
  
  
  