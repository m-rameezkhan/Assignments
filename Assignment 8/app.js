// Question No 1
// function date() {
//     let currentDate = new Date()
//     document.write(currentDate)
// }
// date()

// Question No 2
// function greet(firstName, lastName) {
//     document.write(`Hello ${firstName} ${lastName}, How are you`)
// }
// greet("Rameez", "Khan")

// Question No 3
// function addTwoNumbers(num1, num2) {
//     return num1 + num2
// }
// a = addTwoNumbers(5, 7)
// document.write(a)

// Question No 4
// function calculate(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//             break;
//         default:
//             result = 'Invalid operator';
//     }
//     document.write(`${num1} ${operator} ${num2} = ${result}`);
// }
// calculate(2, 3, '+');

// Question No 5
// function square(num) {
//     return num * num;
// }
// console.log(square(5));

// Question No 6
// function factorial(n) {
//     if (n == 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// b = factorial(5)
// console.log(b)

// Question No 7
// function counting(startNo, endNo) {
//     for (let i = startNo; i <= endNo; i++) {
//         document.write(i + '<br>')
//     }
// }
// counting(12, 18)

// Question No 8
// function hypo(perp, base) {
//     function square(num) {
//         return num * num
//     }
//     hypo = square(base) + square(perp)
//     return Math.sqrt(hypo)
// }
// hypotenuse = hypo(4, 5)
// document.write(hypotenuse)

// Question No 9
// function areaOfRectangle(width, height){
//     return width * height
// }
// width = 5
// height = 15
// document.write(areaOfRectangle(20, 40), "<br>")
// document.write(areaOfRectangle(width, height))

// Question No 10
// function palindrome(word) {
//     let reverse = "";
//     for (let i = word.length-1; i >= 0; i--) {
//         reverse = reverse + word[i]
//         console.log(word[i])
//     }
//     console.log(reverse)
//     if (reverse == word) {
//         document.write(word , " is a Palindrome word")
//     }
//     else{
//         document.write(word , " is not Palindrome word")
//     }
// }
// palindrome("madam")

// Question No 11
// function capitilize(para) {
//     let paraArr = para.split(" ");
//     for (let i = 0; i < paraArr.length; i++) {
//         paraArr[i] = paraArr[i][0].toUpperCase() + paraArr[i].slice(1);
//     }
//     let capitalizedPara = paraArr.join(" ");
//     document.write(capitalizedPara);
// }
// capitilize("a quick brown fox jumps over the lazy dog");

// Question No 12
// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longestWord = "";
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("Web Development Tutorial")); 

// Question No 13
// function countLetterOccurrences(str, letter) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countLetterOccurrences("JSResourceS.com", "o")); 

// Question No 14
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference.toFixed(2)}`);
// }
// function calcArea(radius) {
//     let area = Math.PI * Math.pow(radius, 2);
//     console.log(`The area is ${area.toFixed(2)}`);
// }
// calcCircumference(5);
// calcArea(5);