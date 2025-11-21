
//  JavaScript Loops Assignments
// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.


// const fruits = ["apple", "banana", "cherry"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }












// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.
// const colors = ["red", "green", "blue"];
// const output = document.querySelector("#output");
// for(let i = 0; i < colors.length; i++){
//     output.innerHTML += `<p>${colors[i]}</p>`;
// }








// 3. Use a for loop to print numbers from 1 to 10 in the browser console.
// for(let i = 1; i <= 10; i++){
//     console.log(i);
    
// }






// 4. Use a while loop to print numbers from 5 to 1 in the console.
//   var i = 5;
// while(i >= 1){
//      console.log(i);
//      i--
// }








// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.


// const div = document.querySelector("div");
// const names = ["Ali", "Sara", "Ahmed"];
// for(let i = 0; i < names.length; i++ ){
//     console.log(names[i]);
//     div.innerHTML += `<p>${names[i]}</p>`;
    
    
// }





// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.




// const para = document.querySelector("#para");
// for (let i = 0; i < 1; i++) {
//     para.innerHTML +=  `<p>"Loading..."</p>`;
    
// }




// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.

// const sum1 = document.querySelector("#sum1");
// const arr = [5, 10, 15];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//      console.log("sum = "+ sum);
     
// }









// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"]
//  and display them as a
// single string in a div with ID cities.

// const div = document.querySelector(".rsult-1");
// let citiesOne = ["Karachi", "Lahore", "Quetta"];
// for(let i=0; i<citiesOne.length; i++){
//     div.innerHTML += `<p>${citiesOne[i]}</p>`
// }














// 9. Write a loop that counts from 1 to 20 and logs only the even 
// numbers in the console.



// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log( "even number" + i);
        
//     }
// }


















// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to
//  find and display the
// largest number in a paragraph with ID max.

// const div = document.querySelector(".result-1");

// const numbers = [45, 22, 89, 100];
// const max = numbers[3];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > max){
//         max == numbers[i];
        
//     }
// }
// div.innerHTML += `<p>${max}</p>`;










// 11. Use document.querySelector to select a div with ID result and 
// change its text to "Task Complete".

// const p = document.querySelector("#result_4");
// p.innerHTML += `Task Complete`;
















// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to 
// calculate the average and
// display it inside an element with ID averageTemp.

// let h4 = document.querySelector("#averageTemp");
// const temperatures = [30, 35, 32, 40];
// let sumOne = 0;
// for(let i = 0; i < temperatures.length; i++){
//     sumOne += temperatures[i];
     
// }
// let average = sumOne / temperatures.length;
// h4.innerHTML += `${average}`;




















// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.

// const p = document.querySelector("#totallSum");
// for (let i = 0; i <= 100; i++){
//     p.innerHTML += `${[i]}`;
// }























// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.

// const animals = document.querySelector("#animals");
// let animalsArr = ["dog", "cat", "bird"];

// for(let i = 0; i < animalsArr.length; i++){
//     animals.innerHTML += `'Animals:' ${animalsArr[i]}`;
// }















// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".


// const title = document.querySelector("title");
// title.innerHTML += `${"Welcome to JavaScript!"}`

















// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.

// for(let i = 0; i <= 50; i++){
//     if(i % 5 === 0 ){
//         console.log("divisible by 5:" + i);
        
//     }
// }











// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.

// const scores = [80, 60, 90, 70];
// const highScores = 0;
// for(let i = 0; i < scores.length; i++){
//     if(scores[i] >= 70){
//     highScores++;
// }
// }
// console.log("High Scores:" + highScores);














// 18. Select an element with ID message and change its text to 
// "Updated successfully" using
// document.querySelector.

// const message = document.querySelector("#message");
// function changeText(message){
//     message.innerHTML += `<p>Updated successfully</p>`;
// }
// changeText(message);
















// 19. Create an array of subjects like ["Math", "Science", "English"],
//  and use a loop to show
// them in a paragraph with ID subjectsList.

// const subjectsList = document.querySelector("#subjectsList");
// const subjects = ["Math", "Science", "English"];
// for(let i = 0; i < subjects.length; i++){
// subjectsList.innerHTML += `<p>${subjects[i]}</p>`;

// }


















// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.



// for(let i = 1; i <= 100; i++){
//   for(let j = 1; j <= 10; j++){
//     console.log(`${i} x ${j} = ${i * j}`);
    
//   }
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i);
    
// }



// const num3 = [5, 10, 15, 2];
// var total = 0;
// for(let i = 0; i < num3.length; i++){
//     total += num3[i];
// }

// console.log(" Sum =" + total);













// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].


// const LargestArr = [45, 67, 12, 89, 34];
// let largest = LargestArr[0];
// for(let i = 0; i < LargestArr.length; i++){
//    if(LargestArr[i] > largest){
//    largest = LargestArr[i];
    
//    }
// }
// console.log("Largest Number:" + largest);





















// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.



// const numbersArr = [45, 67, 12, 89, 34];
// let even = 0;
// for(let i = 0; i < numbersArr.length; i++){
//    if(numbersArr[i] % 2 === 0 ){
// //    even = numbersArr[i];
    
//    }
// }
// console.log("even Number:" + even);






















// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].

// const aveArr = [20, 30, 40, 50];
// const sumTwo = 0;
// for (let i = 0; i < aveArr.length; i++){
//     sumTwo += aveArr[i];

// }
// let average = sumTwo / aveArr.length;
// console.log(`${average}`)















// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new 
// array where each value is
// multiplied by 3.
// const even = [2, 4, 6, 8, 10];
// let newArr = [];
// for (let i = 0; i < even.length; i++) {
    
//        newArr.push(even[i] * 3)
      
    
    
// }
// // let total =
// console.log(" 3 se multiplied: " + newArr);
 


















// 25. Loop through an array [1, 3, 5, 7, 9] and count how many 
// elements are greater than 4.

// const oddNum = [1, 3, 5, 7, 9];
// let count = 0;
// for (let i = 0; i < oddNum.length; i++) {
//     if(oddNum[i] > 4){
//     count++;
//     }
    
// }

// console.log("Char se bray number ke tadad: " + count);

















// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only 
// the numbers divisible by 5.

// const even = [2, 4, 6, 8, 10];
// let newArr = 0;
// for (let i = 0; i < even.length; i++) {
    
//        if(even[i] % 5 == 0){
//           newArr += even[i]
//        }
      
    
    
// }
// // let total =
// console.log(" divided by 5: " + newArr);























// 27. Write a loop that checks if a number 25 exists in the array
//  [10, 20, 30, 40, 25].

// const num6 = [10, 20, 30, 40, 25];
// const found = false;
// for (let i = 0; i < num6.length; i++) {
//     if (num6[i] === 25) {
//         found = true;
//         break
//     }
    
// }
// console.log(found);





















// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const resultArray = [];

// for (let i = 0; i < array1.length; i++) {
//     resultArray.push(array1[i] + array2[i]);
// }

// console.log(resultArray);





















// 29. Use a loop to find the second-largest number in an array
//  [10, 99, 23, 87, 56].

// let numberTwo = [10, 99, 23, 87, 56];
// let largestNum = 0;
// while( i < numberTwo.length) {
//     largestNum += numberTwo[i];
    
//         largestNum++;
    
    
// }

// console.log(largestNum);





















// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// .reverse()).
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = [];

// for (let i = originalArray.length - 1; i >= 0; i--) {
//     reversedArray.push(originalArray[i]);
// }

// console.log(reversedArray);
















// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.


// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;
    
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log("Prime numbers between 1 and 50:");
// for (let i = 1; i <= 50; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }



























// 32. Create a loop that finds the difference between the largest and smallest 
// numbers in an array [11, 4, 99, 2, 47].

// const numbers = [11, 4, 99, 2, 47];
// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }

// const difference = largest - smallest;
// console.log(`Difference between largest and smallest: ${difference}`);



















// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are
//  in the array.

// const numbers = [0, -1, -5, 6, 8, -3];
// let negativeCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         negativeCount++;
//     }
// }

// console.log(`Negative numbers count: ${negativeCount}`);




















// 34. Loop through an array of numbers and create a new array that only contains 
// odd numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i]);
//     }
// }

// console.log('Odd numbers:', oddNumbers);
















// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.

// const originalArray = [0, 1, 0, 3, 0, 5];
// const nonZeroArray = [];

// for (let i = 0; i < originalArray.length; i++) {
//     if (originalArray[i] !== 0) {
//         nonZeroArray.push(originalArray[i]);
//     }
// }

// console.log('Array without zeroes:', nonZeroArray);























// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last 
// elements.





// const numbers = [1, 2, 3, 4, 5, 6];

// const firstElement = numbers[0];
// const lastElement = numbers[numbers.length - 1];

// for (let i = 0; i < numbers.length; i++) {
//     if (i === 0) {
//         numbers[i] = lastElement;
//     } else if (i === numbers.length - 1) {
// //         numbers[i] = firstElement;
//     }
// }

// console.log('Array after swapping first and last:', numbers);
























// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are 
// even.


// const numbers = [2, 4, 6, 8];
// let allEven = true;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         allEven = false;
//         break; 
//     }
// }

// console.log(`All numbers are even: ${allEven}`);




















// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are 
// greater than or equal to the average of the array.
























// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.