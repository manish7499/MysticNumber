let randomNumber = 10;
let enterNo;

// for(let i=rander,  )

while (true) {
  enterNo = prompt("Enter a number between 1 to 50: ");
var difference=enterNo-randomNumber;
if(difference>5)
{
    console.log('You are not near random number')
}
else
{
    console.log('You are  near random number')
}
  if (enterNo == randomNumber) {
    console.log("Congratulations! You entered the correct number.");
    break; // Exit the loop if the number is correct
  } else if (enterNo > randomNumber) {
    console.log("Your number is too high. Try again!");
  } else if (enterNo < randomNumber) {
    console.log("Your number is too low. Try again!");
  } 
}

