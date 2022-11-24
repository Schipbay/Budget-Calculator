


var calculate = document.getElementById("calculate")

calculate.addEventListener("click", calculation)

function calculation(){
        var feeding = parseInt(document.getElementById("feeding").value)
        console.log(feeding)
        var clothing = parseInt(document.getElementById("clothing").value)
        var transportation = parseInt(document.getElementById("transportation").value)
        var insurance = parseInt(document.getElementById("insurance").value)
        var miscellaneous = parseInt(document.getElementById("miscellaneous").value)
        var entertainment = parseInt(document.getElementById("entertainment").value)
        var investment = parseInt(document.getElementById("investment").value)
        var medical = parseInt(document.getElementById("medical").value)
        var utilities = parseInt(document.getElementById("utilities").value)
        var housing = parseInt(document.getElementById("housing").value)
        
        var calc = (feeding + clothing + transportation + insurance + miscellaneous + 
            entertainment + investment + medical + utilities + housing)
        console.log(calc)

var budget = document.getElementById("budget").value
    alert("Your remaining budget balance is " + calc)
}