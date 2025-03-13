// Question 1
// function power(a, b) {
//     for (let i = 1; i < b; i++) {
//         a = a * a;
//     }
//     return a
// }
// console.log(power(5, 3))

// Question 2
// function yearCheaker(year) {
//     if (year%4 == 0) {
//         alert(`${year} is a leap Year`)
//     }
//     else{
//         alert(`${year} is not a leap Year`)
//     }
// }
// yearCheaker(prompt("Enter a Year"))

// Question 3
// function areaOfTriangle(a, b, c) {
//     let s = calculateS(a, b, c)
//     let area = s*(s - a)*(s - b)*(s - c)
//     area = Math.sqrt(area)
//     return area
// }
// function calculateS(a, b, c) {
//     let s = (a + b + c) / 2
//     return s
// }
// console.log(areaOfTriangle(4, 5, 7))

// Question 4
// function main() {
//     let marks1 = +prompt("Enter the marks of Math")
//     let marks2 = +prompt("Enter the marks of Computer")
//     let marks3 = +prompt("Enter the marks of English")

//     let percentage = calcPercentage(marks1, marks2, marks3)
//     let average = calcAverage(marks1, marks2, marks3)
//     console.log("Percentage: ", percentage)
//     console.log("Average: ", average)
// }
// function calcPercentage(a, b, c){
//     let total = 300
//     let obtained = a + b + c
//     let percentage = obtained / total * 100
//     return percentage
// }
// function calcAverage(a, b, c) {
//     let sum = a + b + c
//     let average = sum / 3
//     return average
// }
// main()

// Question 5
// function indexOfStr(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             console.log(i)
//             return i
//         }
//     }
//     console.log("Character not found")
// }
// indexOfStr("Rameez", "o")

// Question 6
function delVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(delVowels("Hello World"))

