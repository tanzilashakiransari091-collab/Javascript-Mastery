 
 
// // Assignment # 26-30 
// // JAVASCRIPT 
 
// // MATH METHODS 
 
  
// // 1. Write a program that takes a positive integer from user & 
// // display the following in your browser. 
// // a. number 
// // b. round off value of the number 
// // c. floor value of the number 
// // d. ceil value of the number  


// // var num  =  3.45214
// // var roundOff = Math.round(num)// decimal num roundoff krta ha 
// // console.log(roundOff);




// // var roundFloor= Math.floor(num)// decimal num roundfloor means left side , small value  krta ha
// // console.log(roundFloor);


// // var roundceil= Math.ceil(num)//decimal num roundceil means right side , bare value krta ha and agy ka numer bh dekhtah ha 
// // console.log(roundceil);



// // var num  =  3.55214
// // var roundOff = Math.round(num)// decimal num roundoff krta ha ig value krta ha
// // console.log(roundOff);


// // var num  =  3.55214
// // var roundFloor= Math.floor(num)// decimal num roundfloor means left side , small value  krta ha
// // console.log(roundFloor);



// //  var num  =  3.05214
// //  var roundceil= Math.ceil(num)//decimal num roundceil means right side , bare value krta ha and agy ka numer bh dekhtah ha 
// // console.log(roundceil);



// // 2. Write a program that takes a negative floating point 
// // number from user & display the following in your browser. 
// // a. number 
// // b. round off value of the number 
// // c. floor value of the number 
// // d. ceil value of the number 





// //  var num  =  -2.673

 
// //  var roundOff = Math.round(num)// decimal num roundoff krta ha ig value krta ha
// //  // it will never se negative number is small or big  
// //  console.log(roundOff);



// //  // it will work vise versa it will see less value - 4 -3 -2 -1 so minus -3 is less ans is -3
// //  var num  =  -2.673
// //  var roundFloor= Math.floor(num)// decimal num roundfloor means left side , small value  krta ha
// // console.log(roundFloor);

// // //it will work vise versa it will see big value - 4 -3 -2 -1 so minus -3 is big ans is -3
// //  var num  =  -2.673
// //  var roundceil= Math.ceil(num)//decimal num roundceil means right side , bare value krta ha and agy ka numer bh dekhtah ha 
// //  console.log(roundceil);





// // 3. Write a program that displays the absolute value of a 
// // number. 
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
// // 4. Write a program that simulates a dice using random() 
// // method of JS Math class. Display the value of dice in your 
// // browser.: 



// // var number = -4
// // var numAbsoulate = Math.abs(number)
// // console.log(numAbsoulate);



// //  var userNum = prompt("enter a nubmer")
// //  var parseNum = parseFloat(userNum)


// // if( isNaN(parseNum)){
// // console.log("Numer is not valid");

// // }
// // else{
// //     var numAbsoulate = Math.abs(parseNum)
// //     console.log(numAbsoulate)
// // }




// // var randomNum = Math.random(randomNum) * 6
// // var roundFloor = Math.floor(randomNum) + 1
// // console.log(roundFloor);


// // 5. Write a program that simulates a coin toss using random() 
// // method of JS Math class. Display the value of coin in your 
// // browser 

// var userInput= prompt("Enter heads or tails").toLocaleLowerCase()
//  var randomNum = Math.random(randomNum) * 2
//  var roundFloor = Math.floor(randomNum) + 1
// // console.log(roundFloor);

// var result;

// if(roundFloor == 1){
// result = "heads"
// // alert("you win ")
// }
// else if (roundFloor == 2) {
// result = "tails"
// // alert("you win ")
// }

// if(userInput == result){
//     console.log("you win")
// }


// else if (userInput === "heads"|| userInput === "tails"){
//     console.log("you win ")
// }

// else{
//     console.log("invalid string")
// }




// // 6. Write a program that shows a random number between 1 
// // and 100 in your browser.


// // var randomNum = Math.random(randomNum) * 100
// // var roundFloor = Math.floor(randomNum) + 1
// // console.log(roundFloor);




// // 7. Write a program that asks the user about his weight. Parse 
// // the user input and display his weight in your browser. 
// // Possible user inputs can be: 
// // a. 50 
// // b. 50kgs 
// // c. 50.2kgs 
// // d. 50.2kilograms 



// var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kilograms)");

// var weight = parseFloat(userInput);

// if (isNaN(weight)) {
//     document.write("Invalid input. Please enter a valid weight.");
// } else {
//     document.write(`The weight of user is ${weight} kilograms`);
// }




// // 8. Write a program that stores a random secret number from 
// // 1 to 10 in a variable. Ask the user to input a number 
// // between 1 and 10. If the user input equals the secret 
// // number, congratulate the user. 



// var secretNum = Math.floor(Math.random() * 10) + 1;

// var userInput = prompt("Enter a number between 1 and 10:");
// var userGuess = parseInt(userInput);

// // 3. Logic Check: Saara result ab console mein print hoga
// if (userGuess == secretNum) {
//     console.log("Wow! The secret number was indeed" ,secretNum);
// } else {
//     console.log(" Try again next time.");
// }
