var startOver = 1;
while (startOver == 1) {
   var userNumber = prompt("Choose a number!");
   userNumber = +userNumber;
   if (isNaN(userNumber)) {
     alert("Make sure your entry is a number!");
   }
   else if (userNumber % 1 != 0) {
     alert("Let's keep it simple, pick a number without a decimal.");
   }
   else {startOver = 0;
   }
}
function fizzBuzz(number) {
    for (var i = 1; i <= number; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
         console.log("FizzBuzz");
      }
      else if (i % 3 == 0) {
         console.log("Fizz");
      }
      else if (i % 5 == 0) {
         console.log("Buzz");
      }
      else {console.log(i);
      }
    }
}
fizzBuzz(userNumber);