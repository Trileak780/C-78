var NOTS = [];

function submit() {
    var NOTS1 = document.getElementById("NOTS1").value;
    var NOTS2 = document.getElementById("NOTS2").value;
    var NOTS3 = document.getElementById("NOTS3").value;
    var NOTS4 = document.getElementById("NOTS4").value;
    NOTS.push(NOTS1);
    NOTS.push(NOTS2);
    NOTS.push(NOTS3);
    NOTS.push(NOTS4);
    console.log(NOTS);
    document.getElementById("DisN").innerHTML = NOTS
    document.getElementById("SuB").style.display = "none";
    document.getElementById("SoB").style.display = "inline-block";
}
function sort() {
    SNOTS = NOTS.sort()
    console.log(SNOTS)
    document.getElementById("DisN").innerHTML = SNOTS
}