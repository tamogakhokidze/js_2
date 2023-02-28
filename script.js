"use strict";
//task 1

// for (let x = 5; x < 100; x++) {
//   console.log(x);
// }

// //task 2

// let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (let a = 0; a < 10; a++) {
//   if (array1[a] > 0) if (array1[a] < 10) console.log(array1[a]);
// }

// //task 3
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 5;
// while (true) {
//   console.log('არის');
//   break;

//  task 4

// let array3 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let x = 0; x < array3.length; x++) {
// //   console.log(array3[x]);
//   sum += array3[x];
//   console.log (sum);
// }

// task 5
// let array4 = [1, 2, 3, 7, 6, 9];
// let sum = 0;
// for (let a = 0; a < array4.length; a++) {
//     // console.log(array4[a]);
//     sum += array4[a];
    
// }
// avg = sum / array4.length
//     console.log (avg);

//task 5_2

// let array4 = [1, 2, 3, 7, 6, 9];
// let sum = 0;

// for (const element of array4) {
//     sum += element;
// }
// avg = sum / array4.length
// console.log (avg);


//task 6

// let array5 = [1, 2, 3, 7, 6, 9];

// for (let i = 0; i < array5.length; i++) {
//   const element = array5[i];

//   if (element == 7) {
//     continue;
//   }
//   console.log(element);
// }

// // task 7
// let user = {
//   firstname: "Giorgi",
//   lastName: "smith",
//   age: 25,
//   studentStatus: "Active",
// };
// console.log(user.studentStatus);

// task 8

// let user = {
//   name: "Giorgi",
//   age: 20,
//   studentStatus: "Active",
// };
// if (user.age < 18 && user.studentStatus == "Active" ){
//     console.log ( "Hello");
// }
//     else if ( user.name == "Levani"){
//         console.log ("hello Levani");
//     }
//     else if (user.studentStatus == "Active" || user.age < 25){
//         console.log ( "hello world");
//     }
//     else {
//         console.log (error);
//     }

// task 9 - for off better 
// let array = [
//   [2, -3, 5, 10],
//   [25, -24, -11, 100],
//   [-6, -7, 10],
// ];

// for (let a = 0; a < array.length; a++) {
//  const element = array[a];
// //  console.log (element[a]); 

// for (let x = 0; x < element.length; x++){
//     console.log (element[x]);

//     const positive = element[x];
//     if (positive > 0) {
//      console.log(positive);
//  }
// }
// }
   

//task 9_2

// let array = [
//   [2, -3, 5, 10],
//   [25, -24, -11, 100],
//   [-6, -7, 10],
// ];

// for (const item of array) {
//     // console.log (item);
    
//     for (const element of item) {
//         // console.log (element);
        
//         if (element > 0) {
//             console.log ( element);
//         }
//     }
// }



//  მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
// let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];

// task 10

// let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// for (let a = 0; a < array.length; a++) {
//   if (array[a] % 2 == 0) {
//     console.log(array[a]);
//   }
// }

// let array1 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// for (let b = 0; b < array1.length; b++) {
//   if (array1[b] % 2 == 1) {
//     console.log(array[b]);
//   }
// }

// 1.ამოიღეთ მარტო ლუწი რიცხვები
// 2.ამოიღეთ კენტი რიცხვები

// task 11 -  for of
// let users = [
//     {userName: "Giorgi", status: false},
//     {userName: "Levani", status: false},
//     {userName: "Anna", status: true}
// ]
// for (const item of users) {
//     // console.log(item); 
//     if (item.status == true) {
//     console.log (item);
// }

// }

// Კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;
