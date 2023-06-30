document.getElementById("hello").style.color = "red";
document.getElementById("hello").style.textDecoration = "underline";
document.getElementById("hello").style.fontSize = "55px";

document.getElementById("username").innerText = "John";

var  firstName = "John";
var  secondName = "omollo";
var  fullName = firstName + " " + secondName

document.getElementById("name").innerText = fullName;

var rent = 1000
var fuel = 3000
var expenditure = rent + fuel

document.getElementById("expenditure").innerText = expenditure;


// Uber charges 100 per km and 20 after that
// Tom travelled 28km
// Uber calculates the cost find out how much the rates will cost?
// uber charges 20% commision all rides .calculate how much the driver made?

var perKilometre = 20
var firstKilometer = 100
var distance = 27
var Kilometer1 = firstKilometer; 
var afterKilometer = distance * perKilometre
var total = Kilometer1 + afterKilometer

var comission = 0.2
var ubercost = 0.2 * total
var driver = total - ubercost


document.getElementById("uber").innerText = total;
document.getElementById("driver").innerText = driver;

// For loops
for(let i = 1; i <=19; i++) {
    console.log(" ")
    console.log("MULTIPLICATION TABLE FOR " + i)
for(let j = 1; j <=19; j++) {
    console.log(i + "x" + j + "=" + i*j )
}

}





