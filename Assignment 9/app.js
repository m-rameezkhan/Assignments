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
function areaOfTriangle(a, b, c) {
    let s = calculateS(a, b, c)
    let area = s*(s - a)*(s - b)*(s - c)
    area = Math.sqrt(area)
    return area
}
function calculateS(a, b, c) {
    let s = (a + b + c) / 2
    return s
}
console.log(areaOfTriangle(4, 5, 7))