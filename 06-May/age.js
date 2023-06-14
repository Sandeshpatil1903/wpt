function f1() {
    let da = new Date(document.getElementById("d1").value)
    let cur = new Date()
    let diff = ((cur - da) / (1000 * 60 * 60 * 24 * 365))
    let diff1 = parseInt((cur - da) / (1000 * 60 * 60 * 24 * 365))
    let diff2 = ((diff - diff1) * 12)
    let diff3 = parseInt(diff2)
    document.getElementById("p1").innerHTML = `<h1>Age:<br> ${diff1} years and ${diff3} months and ${Math.round(((diff2 - diff3) * 30.41))} Days</h1>`
}