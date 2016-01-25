var annoying;

while (annoying!= "ok") {
    annoying = prompt('Confirm this agreement!\n\nJust input "Ok" in this field!').toLowerCase();
}
document.getElementById("confirmation").innerHTML = "Your soul is mine!";

var confirmation = confirm('Do you want to go to the cinema?');

if (confirmation) {
    document.getElementById("confirmation").innerHTML += "<br>We go to the cinema!";
    //document.location.href = "https://netflix.com/";
}
else {
    document.getElementById("confirmation").innerHTML += "<br>No big deal, we can order a pizza.";
}

var mood = prompt("Whats your mood?");

if (mood !== "") {
    document.getElementById("confirmation").innerHTML += "<br>You have " + mood + " mood.";
}
else {
    document.getElementById("confirmation").innerHTML += "<br>You have no mood.";
}