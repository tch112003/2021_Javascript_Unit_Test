function changeRed(){
    var x = document.getElementById("table").getElementsByTagName("td");
    x[0].style.backgroundColor = "#ff0000";
}

function changeGreen(){
    var x = document.getElementById("table").getElementsByTagName("td");
    x[0].style.backgroundColor = "#00ff00";
}

function changeBlue(){
    var x = document.getElementById("table").getElementsByTagName("td");
    x[0].style.backgroundColor = "#0000ff";
}

/* loosely inspired by nnnnn's answer to https://stackoverflow.com/questions/11517150/how-to-change-background-color-of-cell-in-table-using-java-script.
x[0] is a common default placeholder value in javascript and colors are in hex color codes
 */