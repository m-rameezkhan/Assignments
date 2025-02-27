var p1Name = "Keyboard"
var p2Name = "Monitor"
var p3Name = "Mouse"
var p4Name = "Printer"
var p5Name = "Laptop"
var p6Name = "Mobile"
var p7Name = "Computer"
var p1Price = 300
var p2Price = 500
var p3Price = 200
var p4Price = 800
var p5Price = 1200
var p6Price = 600
var p7Price = 350

var pItems1 = prompt(`How many ${p1Name} you want to buy each cost is ${p1Price}`)
var pItems2 = prompt(`How many ${p2Name} you want to buy each cost is ${p2Price}`)
var pItems3 = prompt(`How many ${p3Name} you want to buy each cost is ${p3Price}`)
var pItems4 = prompt(`How many ${p4Name} you want to buy each cost is ${p4Price}`)
var pItems5 = prompt(`How many ${p5Name} you want to buy each cost is ${p5Price}`)
var pItems6 = prompt(`How many ${p6Name} you want to buy each cost is ${p6Price}`)
var pItems7 = prompt(`How many ${p7Name} you want to buy each cost is ${p7Price}`)

var totalPrice = (pItems1 * p1Price) + (pItems2 * p2Price) + (pItems3 * p3Price) + (pItems4 * p4Price) + (pItems5 * p5Price) + (pItems6 * p6Price) + (pItems7 * p7Price)
var discount = 0
var salseTax = totalPrice/100 *15

if (totalPrice >= 10000){
    discount = (totalPrice / 100) * 10
}
else if (totalPrice >= 5000) {
    discount = (totalPrice / 100) * 5
}
else if (totalPrice >= 3000) {
    discount = (totalPrice / 100) * 3
}
else{
    discount = 0
}

document.write(`
    <table border="">
        <tr>
            <th>Sno</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
        </tr>
        <tr>
            <td>01</td>
            <td>${p1Name}</td>
            <td>${p1Price}</td>
            <td>${pItems1}</td>
            <td>${pItems1*p1Price}</td>
        </tr>
        <tr>
            <td>02</td>
            <td>${p2Name}</td>
            <td>${p2Price}</td>
            <td>${pItems2}</td>
            <td>${pItems2*p2Price}</td>
        </tr>
        <tr>
            <td>03</td>
            <td>${p3Name}</td>
            <td>${p3Price}</td>
            <td>${pItems3}</td>
            <td>${pItems3*p3Price}</td>
        </tr>
        <tr>
            <td>04</td>
            <td>${p4Name}</td>
            <td>${p4Price}</td>
            <td>${pItems4}</td>
            <td>${pItems4*p1Price}</td>
        </tr>
        <tr>
            <td>05</td>
            <td>${p5Name}</td>
            <td>${p5Price}</td>
            <td>${pItems5}</td>
            <td>${pItems5*p1Price}</td>
        </tr>
        <tr>
            <td>06</td>
            <td>${p6Name}</td>
            <td>${p6Price}</td>
            <td>${pItems6}</td>
            <td>${pItems6*p1Price}</td>
        </tr>
        <tr>
            <td>07</td>
            <td>${p7Name}</td>
            <td>${p7Price}</td>
            <td>${pItems7}</td>
            <td>${pItems7*p1Price}</td>
        </tr>
        <tr>
            <td colspan="4" align="center"><strong>Total Price</strong></td>
            <td colspan="1" align="center"><strong>${totalPrice}</strong></td>
        </tr>
        <tr>
            <td colspan="4" align="center"><strong>Discount</strong></td>
            <td colspan="1" align="center"><strong>${discount}</strong></td>
        </tr>
        <tr>
            <td colspan="4" align="center"><strong>Discounted Price</strong></td>
            <td colspan="1" align="center"><strong>${totalPrice - discount}</strong></td>
        </tr>
    </table>
    `)