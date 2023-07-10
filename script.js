function convertTemp() {
    let c = document.getElementById("c").value;
    let f = (c * 9/5) + 32
    if (c == "") {
        document.getElementById("f").value = ""
        alert("Please insert the temperature in Celcius")
        return false
    }
    document.getElementById("f").value = f
}
function convertWeight() {
    let kg = document.getElementById("kg").value;
    let lbs = kg * 2.205
    if (kg == "") {
        document.getElementById("lbs").value = ""
        alert("Please insert the weight in Kilograms")
        return false
    }
    document.getElementById("lbs").value = lbs.toFixed(3)
}
function convertDist() {
    let km = document.getElementById("km").value;
    let m = km / 1.609
    if (km == "") {
        document.getElementById("m").value = ""
        alert("Please insert the distance in Kilometers")
        return false
    }
    document.getElementById("m").value = m.toFixed(3)
}