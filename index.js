//1
function sumOfFourAndSix(){
   let sum = 0;
  //create a variable for the number to go into.
  for (let i = 0; i <= 1000; i++){
  //create a for loop that initializes the variable to start at 1
  //Condition is set to equal 1000, meaning it wont loop past 1000.
  //i++ will continue to add one to the loop.
  if (i % 4 ===0 && i % 6 === 0){
     sum += i;
  }
}
return sum
}
console.log(sumOfFourAndSix())

//2
function oddAndEvenInFifteen(){
  for (let i =0; i < 16; i++) {
      if (i % 2 ===0)
        console.log (i + " is even") 
    else
        console.log (i + " is odd")
} }
oddAndEvenInFifteen();
// ^^I think I got the semi colons or curly brackets wrong but it still works//
// 3
function assignGrade(score){
    if(score > 90){
        return 'A';
    }
        else if(score > 80){
            return 'B'
        }
}






