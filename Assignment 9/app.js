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
// function delVowels(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }
// console.log(delVowels("Hello World"))

// Question 7 By using If Else
// function twoVowels(line) {
//     let letter = []
//     let count = 0
//     for (let i = 0; i < line.length; i++) {
//         if (line[i] == "a" || line[i] == "e" || line[i] == "i" || line[i] == "o" || line[i] == "u") {
//             if (line[i+1] == "a" || line[i+1] == "e" || line[i+1] == "i" || line[i+1] == "o" || line[i+1] == "u") {
//                 letter.push(line[i] + line[i+1])
//                 count++
//             }
//         }
//     }
//     return [letter, count]
// }
// console.log(twoVowels("Pleases read this application and give me gratuity"))

// Question 7 By using Switch
// function countVowelPairs(text) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
    
//     for (let i = 0; i < text.length - 1; i++) {
//         let pair = text[i] + text[i + 1];
        
//         switch (true) {
//             case vowels.includes(text[i]) && vowels.includes(text[i + 1]):
//                 count++;
//                 console.log(`Found vowel pair: ${pair}`);
//                 break;
//         }
//     }
    
//     return count;
// }
// let sentence = "Pleases read this application and give me gratuity";
// console.log("Total vowel pairs:", countVowelPairs(sentence));

// Question 8
// function kmToMeter(km) {
//     return km*1000
// }
// function kmToFeet(km) {
//     return km*3280.84
// }
// function kmToInche(km) {
//     return km*39370.1
// }
// function kmToCm(km) {
//     return km*100000
// }
// function printDistance(distance) {
//     console.log(`Meter: ${kmToMeter(distance)}`)
//     console.log(`Feet: ${kmToFeet(distance)}`)
//     console.log(`Inche: ${kmToInche(distance)}`)
//     console.log(`Centimeter: ${kmToCm(distance)}`)
// }
// let distance = prompt("Enter a distance in Kilometer")
// printDistance(distance)

// Question 9
// function overtimePay(hours) {
//     let bouns = 0
//     if (hours > 40) {
//         bouns = 12 * (hours - 40)
//     }
//     return bouns
// }
// workTime = prompt("Enter Your total today's work time")
// console.log("Your Overtime Pay is Rs:", overtimePay(workTime))

// Question 10
// function cashPayBack(amount) {
//     let ten = 0
//     let twenty = 0
//     let fifty = 0
//     let hundred = 0
//     let thousand = 0
//     let coins = 0
//     thousand = Math.floor(amount/1000)
//     amount = amount%1000
//     hundred = Math.floor(amount/100)
//     amount = amount%100
//     fifty = Math.floor(amount/50)
//     amount = amount%50
//     twenty = Math.floor(amount/20)
//     amount = amount%20
//     ten = Math.floor(amount/10)
//     amount = amount%10
//     coins = amount
//     console.log(`You will have ${thousand} thousand Notes ${hundred} hundred Notes ${fifty} fifty Notes ${twenty} twenty Notes ${ten} ten Notes ${coins} coins`)
// }
// cashPayBack(prompt("Enter the Amount"))