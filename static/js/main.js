
function ToggleEdit() {
    var div = document.getElementById("right-div");
    var but = document.getElementById("toggbut");
    // if (but.style.display == "block") {
    div.style.marginRight = "0%";
    but.style.display="none";
    // }
}

function Closeit() {
    var div = document.getElementById("right-div");
    var but = document.getElementById("toggbut");
    // if (but.style.display=="none") {
        div.style.marginRight = "-35%";
        but.style.display="inline-block";
    // }
}
