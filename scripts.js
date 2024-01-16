const person = {
  firstName: "Dolan",
  lastName: "Street",
 };
 

 const numbersArray = [3, 6, 12, 9];
 function compareNumbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
     return "Error";
  }
  if (num1 > num2) {
     return num1;
  } else if (num1 < num2) {
     return num2;
  } else {
     return "Both numbers are equal.";
  }
 }
 
 
 function getFullName(user) {
  if (user && user.firstName && user.lastName) {
     return `${user.firstName} ${user.lastName}`;
  } else {
     return "Error: Invalid user object.";
  }
 }
 
 console.log(compareNumbers(numbersArray[0], numbersArray[1]));
 console.log(compareNumbers(numbersArray[0], numbersArray[3]));
 
 console.log(getFullName(person));