// console.log("hello world");


// let username = "Sir Abdullah";
// let age = 20;
// let email = "mabdullah@gmail.com";

// // console.log("username is " + username + " and age is " + age + " and email is " + email + " " + age);
// console.log(`hello world ${username} and age is ${age} and email is ${email}`);



// for state


// i = iteration

// initialization condition increment

// infinite loop

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let num = 10;


// // 10 * 1 = 10
// // 10 * 2 = 20      








// let num = 48;

// for(let i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = ${num * i}`);
// }



// for(let i = 10; i >= 1; i--){
//     console.log(i);
    
// }




// nested loop

// for(let i = 0; i < 5; i++){
//     console.log("parent loop ==>" , i);
//     for(let j = 0; j < 5; j++){
//         console.log("child loop ==>" , j);
//     }
// }



// for(let i = 1; i <= 1000; i++){
//     console.log(`Table of ${i}`);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log('--------------------');
    
    
// }



// const input = document.querySelector("#numberInput");
// const result = document.querySelector("#result");


// function generateTable(){
//     const number = +input.value;
//     for(let i = 1; i <= 10; i++){
//         console.log(`${number} * ${i} = ${number * i}`);
//         result.innerHTML += `<p>${number} * ${i} = ${number * i}</p>`; 
        
//     }
    
// }




// dom manipulation
// nested loop
// loops with arrays
// while loop
// do while loop





// const result = document.querySelector("#result");

// const cities = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];

// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
//     result.innerHTML += `<p>${cities[i]}</p>`;
// }


// break & continue


// for(let i = 0; i < 10; i++){
//     console.log(i);
//     if(i == 5){
//         console.log("loop is breaked at 5");
//         break 
//     }
// }


// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         // console.log("loop is breaked at 5");
//         continue 
//     }
//     console.log(i);
   
// }






// let i = 11;
// while(i < 10){
//     console.log(i);
//     i++    
// }



// let i = 11
// do {
//     console.log(i);
//     i++
    
// } while (i < 10);











//Q.1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console. 

//Ans
 const fruits = ["apple", "banana", "orange", "mango", "grape"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i] , i);
    
}






//Q2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to 
// a paragraph with the ID output using document.querySelector. 

//Ans

const result_1 = document.querySelector("#result_1")
let color = ["red", "green", "blue"];
for(let i = 0; i < color.length; i++){
    result_1.innerHTML += `<p>${color[i]}</p>`;
    
}



//Q 3. Use a for loop to print numbers from 1 to 10 in the browser console. 


//Ans

for (var i = 1; i <= 10; i++){
    console.log(i);
    
}


//Q 4. Use a while loop to print numbers from 5 to 1 in the console. 

//Ans

for (var j = 5; j >= 1; j--){
    console.log(j);
    
}


//Q 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div with
//  ID names to show all names separated by commas. 

//Ans
const name = ["Ali", "Sara", "Ahmed"];
let result_2 =document.getElementById ("result_2");
for (let i = 0; i < name.length; i++) {
   result_2.innerHTML += `<p>${name[i]} = ${name , i}</p>`;
}


//Q 6. Change the text of a paragraph with ID status to "Loading..." using 
//document.querySelector. 

//ans

  let element = document.querySelector("#status");

  for (let i = 0; i < 1; i++) {
    element.textContent = "Loading...";
  }



  //Q 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total 
  // in a paragraph with ID sum. 

  //Ans

const num1 = [5, 10, 15];
var total = 0;
for(let i = 0; i < num1.length; i++){
    total += num1[i];
}
let number = document.querySelector("#sum").innerHTML = " Sum =" + total;

console.log(" Sum =" + total);






//Q 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and 
// display them as a single string in a div with ID cities. 

//Ans

const cities1 = document.querySelector("#cities1");

const cities = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];

for(let i = 0; i < cities.length; i++){
    console.log(cities[i]);
    cities1.innerHTML += `<p>${cities[i]}</p>`;
}







//Q 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console. 

//Ans

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log( "even number" + i);
        
    }
}



//Q 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and 
// display the largest number in a paragraph with ID max. 

//Ans

const num2 = [45, 22, 89, 100];
let max = num2[0];
for(let i = 1; i < num2,length; i++){
    if(num2[i] > max){
        max = num2[i];
    }
}
let max2 = document.getElementById("max").textContent += `Max =  ${max}`;





//Q 11. Use document.querySelector to select a div with ID result and change its text to "Task Complete". 

//Ans 

let result_3 = document.querySelector("#result_3");
 result_3.innerHTML += `Task Complete `;



 //Q 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and display it
 //  inside an element with ID averageTemp. 

 //Ans

 let temperatures = [30, 35, 32, 40];
 let sum = 0;
 for (let i = 1; i < temperatures.length; i++){
    sum += temperatures[i];
 }
 let average = sum / temperatures.length ;
 document.querySelector("#averageTemp");
 averageTemp.innerHTML = `Averag Temperatures: ${average}`;


 




 //Q 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a paragraph with ID totalSum. 


 //Ans

 let sum1 = 0;
for (let i = 1; i <= 100; i++){
   sum += i;
}
document.querySelector("#totalSum").innerHTML = `Sum: ${sum}`;





//Q 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with ID animals.
//Ans

var array = ["dog", "cat", "bird"];
document.querySelector("#animals");
for(let i = 0; i < array.length; i++){
   animals.innerHTML = `Animals: ${array}`
}







//Q 15. Use document.querySelector to select a heading with ID title and change its text to "Welcome to JavaScript!". 

//Ans

let title = document.querySelector("#title");
 title.innerHTML += `Welcome to JavaScript`;







 //Q 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log them to the console. 

 //Ans 

 for(let i = 1; i <= 50; i++){
    if(i % 5 === 0){
        console.log( "divisible by 5:" + i);
        
    }
}







//Q 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 
// 75 and display the count in a div with ID highScores.

//Ans

var arr1 = [80, 60, 90, 70];
var scores = 0;
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > 75){
      scores++;
    }
}
// document.querySelector("#highScores").innerHTML +=  `High Scores: $ {scores}`;
console.log("High Scores:" + scores);











//Q 18. Select an element with ID message and change its text to "Updated successfully" using document.querySelector. 

//Ans

document.querySelector("#message");
 message.innerHTML += `Updated successfully`;







 //Q 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show them
 //  in a paragraph with ID subjectsList. 

 //ans

 var arr2 = ["Math", "Science", "English"];
document.querySelector("#subjectsList");
for(let i = 0; i < arr2.length; i++){
   subjectsList.innerHTML = `subjectsList: ${arr2}`
}










//Q 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given an array
//  of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all elements. 

//Ans

for(let i = 10; i >= 1; i--){
    console.log(i);
    
}



const num3 = [5, 10, 15, 2];
var total = 0;
for(let i = 0; i < num3.length; i++){
    total += num3[i];
}

console.log(" Sum =" + total);









//Q 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

//Ans
const num4 = [45, 67, 12, 89, 34];
let largest = num4[0];
for(let i = 1; i < num4.length; i++){
   if(num4[i] > largest){
   largest = num4[i];
    
   }
}
console.log("Largest Number:" + largest);







//Q 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even. 

//Ans
const numbers = [3, 8, 6, 1, 9, 2];
let even = 0;

numbers.forEach(num => {
  if (num % 2 === 0) even++;
});

console.log(even);







//Q  23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50]. 

//Ans

const arr3 =[20, 30, 40, 50];
let average1 = 0;
for (let i = 0; i < arr3.length; i++){
    average1 += arr3[i];
}
let sum2 = average / arr3.length;
console.log("Average :" + sum2);









//Q 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is multiplied by 3. 
//Ans

const arr4 = [2, 4, 6, 8, 10];
let multiplied = [];
for(let i = 0; i < arr4.length; i++){
    multiplied.push(arr4[i] * 3);
}
console.log(" 3 se multiplied: " + multiplied);









//Q 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4. 

//Ans
let arr5 = [1, 3, 5, 7, 9];
let count = 0;
for (let i = 0; i < arr5.length; i++){
    if(arr5[i] > 4){
        count++;
    }
}
console.log("Char se bray number ke tadad: " + count);










//Q  26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5. 

let arr6 = [10, 15, 20, 25, 30];
let div = 0;
for (let i = 0; i < arr6.length; i++){
    if (arr6[i] %5 == 0) {
        div += arr6[i];
    }
}

console.log(" divisible by 5. " + div);












//Q 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25]. 

//Ans

const num6 = [10, 20, 30, 40, 25];
let found = false;
for (let i = 0; i < num6.length; i++) {
  if (num6[i] === 25) {
    found = true;
    break;
  }
}
console.log("25 found?", found);












//Q 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the sum of corresponding elements. 

//Ans

const a = [1, 2, 3];
const b = [4, 5, 6];
const sumArray = [];
for (let i = 0; i < a.length; i++) {
  sumArray.push(a[i] + b[i]);
}
console.log(sumArray);






//Q 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56]. 

//Ans






















//Q 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use .reverse()). 

//Ans


const arr7 = [1, 2, 3, 4, 5];
const reverse = [];
for (let i = arr7.length - 1; i >= 0; i--) {
  reverse.push(arr7[i]);
}
console.log("Reversed:", reverse);
