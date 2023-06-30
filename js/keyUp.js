document.getElementById("input").onkeyup = function(){
    let input = document.getElementById("input").value;
    output.innerText = input
}
document.getElementById("input2").onkeydown = function(){
    let input2 = document.getElementById("input2").value;
    output2.innerText = input2
}
document.getElementById("output3").innerText = "Thursaday"
document.getElementById("output3").onmouseover = function() {
    document.getElementById("output3").innerText = "Today is Thursaday"
}
// document.getElementById("output3").onmouseout = function() {
//     document.getElementById("output3").innerText = "Thursday"
// }
document.getElementById("output3").onmouseup = function (){
    document.getElementById("output3").innerText = "Thursday"
}
// onload = function () {
//     alert("Please enter")
// }
select.onchange = function(){
    let option = select.value
    output4.innerText = option
}