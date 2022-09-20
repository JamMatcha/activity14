//console.log("Hello");

//activity14:
//3. prompt
let number = Number(prompt("Please enter a number: "));
console.log("The number you provided is: " + number +".");
//4. Create a for loop that will be initialized with the number provided by the user, will stop when the value is less than or equal to 0 and will decrease by 1 every iteration.
for(let i=number; i>0; i--){
	number--;

	//console.log("Number:" + number);
//5. Create a condition that if the current value is less than or equal to 50, stop the loop.
	
	if(number<=50){
		//console.log("number is less than 50. Loop will be stopped");
		console.log("The current value is at 50. Terminating the loop.")
		break;
	}

//6. Create another condition that if the current value is divisible by 10, print a message that the number is being skipped and continue to the next iteration of the loop.
	if(number%10 === 0){
		//console.log('Number "' +number+'" is divisible by 10. This number is being skipped');
		console.log("The number is divisible by 10. Skipping the number.");
		continue;
	}

//7. Create another condition that if the current value is divisible by 5, print the number.
	if(number%5 === 0){
		//console.log('Number "' + number + '" is divisible by 5 ')
		console.log(number);
	}

//console.log("Number:" + number);
}
console.log("PART 2 of the Activity:");
//8. Create a variable that will contain the string supercalifragilisticexpialidocious.
let longWord = "supercalifragilisticexpialidocious";
console.log(longWord);
//9. Create another variable that will store the consonants from the string.
let consonant = "";
//10. Create another for Loop that will iterate through the individual letters of the string based on it’s length.
for(let s=0; s<longWord.length; s++){
//11. Create an if statement that will check if the letter of the string is equal to a vowel and continue to the next iteration of the loop if it is true.
	if(
		longWord[s] == "a" ||
		longWord[s] == "e" ||
		longWord[s] == "i" ||
		longWord[s] == "o" ||
		longWord[s] == "u" 
		
	){
		continue;
	}
//12. Create an else statement that will add the letter to the second variable.
	else{
		consonant += longWord[s];
		
	}
	
}
console.log(consonant);

