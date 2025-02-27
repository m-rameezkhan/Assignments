// Question 1
// for (let i = 0; i < 5; i++) {
//     document.write("Hello World<br>")
// }

// Question 2
// for (let i = 1; i < 11; i++) {
//     document.write(i + "<br>")
// }

// Question 3
// var table = +prompt("Enter the number which you want the table")
// var length = +prompt("Enter the length where you want the table")
// for(var i = 1; i <= length; i++){
//     document.write(`${table} x ${i} = ${table * i} <br>`)
// }

// Question 4
// var a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for(var i = 0; i < a.length; i++){
//     document.write(a[i] + "<br>")
// }

// Question 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }
// for(i = 0; i < fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`)
// }

// Question 6
// var arraySize = +prompt("Enter the number of items")
// var items = []
// for(var i = 0; i < arraySize; i++){
//     var item = prompt(`Enter value for ${i}`)
//     items.push(item)
// }
// document.write(`No of items: ${arraySize}<br>Items:<br>`)
// for(i = 0; i < arraySize; i++){
//     document.write(items[i] + "<br>")
// }

// Question 7
// document.write("a) Counting:")
// for(let i = 0; i <= 15; i++){
//     document.write(i + ", ")
// }
// document.write("<br>b) Reverse Counting:")
// for(let i = 15; i > 0; i--){
//     document.write(i + ", ")
// }
// document.write("<br>c) Even:")
// for(let i = 0; i <= 15; i += 2){
//     document.write(i + ", ")
// }
// document.write("<br>d) Odd:")
// for(let i = 1; i <= 15; i += 2){
//     document.write(i + ", ")
// }
// document.write("<br>e) Series:")
// for(let i = 0; i <= 15; i += 2){
//     document.write(i + "k, ")
// }

// Question 8
// let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// for(let i = 0; i < A.length; i++){
//     if (order == A[i]) {
//         document.write(`${order} is <b>available</b> at index ${i} in our bakery`)
//         break;
//     }
//     if (i == A.length - 1) {
//         document.write(`We are sorry. ${order} is <b>not available</b> in our bakery`)
//     }
// }

// Question 9
// let A = [24, 53, 78, 91, 12]
// var max = A[0]
// for (let i = 0; i < A.length; i++) {
//     if (A[i] > max) {
//         max = A[i]
//     }
// }
// document.write(`Array items: ${A}<br>
//                 The largest number is ${max}`)

// Question 10
// let A = [24, 53, 78, 91, 12]
// var min = A[0]
// for (let i = 0; i < A.length; i++) {
//     if (A[i] < min) {
//         min = A[i]
//     }
// }
// document.write(`Array items: ${A}<br>
//                 The smallest number is ${min}`)

// Question 11
// let A = [24, 53, 78, 91, 12]
// var max = A[0]
// var min = A[0]
// for (let i = 0; i < A.length; i++) {
//     if (A[i] > max) {
//         max = A[i]
//     }
//     if (A[i] < min) {
//         min = A[i]
//     }
// }
// document.write(`Array items: ${A}<br>
//                 The largest number is ${max}<br>
//                 The smallest number is ${min}`)

// Question 12
// for(let i = 5; i <= 100; i += 5){
//     document.write(i + ", ")
// }

// Question 13
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// document.write(`
//         <table border="">
//             <tr>
//                 <th width="70px">Students</th>
//                 <th width="70px">Scores</th>
//             </tr>
//         </table>
//         `)
// for (let i = 0; i < students.length; i++) {
//     document.write(`
//         <table border="">
//             <tr>
//                 <td width="70px">${students[i]}</td>
//                 <td width="70px">${scores[i]}</td>
//             </tr>
//         </table>
//         `)
// }

// Question 14
// var scores = [12, 45, 3, 22, 34, 50];
// var stop = +prompt("Enter the stop value")
// for (let i = 0; i < stop; i++) {
//     document.write(i + ", ")
// }

// Question 15
// A = [ [1,2,3] , [4,5,6] , [7,8,9]]
// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//            document.write(A[i][j] + " ")
//     }
//     document.write("<br>")
// }

// Question 16
// var variable = +prompt("Enter a number")
// for (let i = variable; i >= 0; i -= 0.5) {
//     document.write(i + " ")
// }

// Question 17
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(`${i} is Even <br>`)
//     }
//     else{
//         document.write(`${i} is Odd <br>`)
//     }
// }

// Question 18
// var product = 1;
// for (let i = 1; i <= 7; i += 2) {
//     product = product * i
// }
// document.write(product)

// Question 19
// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j < input - i ; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }
        
// Question 20
// a
// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j < input; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }
// b
// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }
// c
// var input = +prompt("Enter a number")
// for (let i = 0; i < input; i++) {
//     for (let j = 0; j < input - i ; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }