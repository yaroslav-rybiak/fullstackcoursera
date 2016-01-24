var confirmation = confirm('Do you want to go to the cinema?');

if (confirmation) {
    document.getElementById("confirmation").innerHTML = "We go to the cinema!";
    //document.location.href = "https://netflix.com/";
}
else {
    document.getElementById("confirmation").innerHTML = "No big deal, we can order a pizza.";
}

var mood = prompt("Whats your mood?");

if (mood !== "") {
    document.getElementById("confirmation").innerHTML += "<br>You have " + mood + " mood.";
}
else {
    document.getElementById("confirmation").innerHTML += "<br>You have no mood.";
}