// tiny helper function
// single digits are formatted with one preceding zero
function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

// DD MM YYYY Format (!)
function getDate(separator="-") {
    let now = new Date()
    return [
        AddZero(now.getDate()),
        AddZero(now.getMonth() + 1),
        now.getFullYear(),
    ].join(separator)
}

function getTime(separator=":") {
    let now = new Date()
    return [
        AddZero(now.getHours()), 
        AddZero(now.getMinutes()),
        AddZero(now.getSeconds()),
    ].join(separator)
}

// hide cursor global
function hideCursor() {
    let body = document.getElementById("experiment-body")
    body.style.cursor = "none"
}


// show cursor globally
function showCursor() {
    let body = document.getElementById("experiment-body")
    body.style.cursor = ""
}

// implement tiny assert method
// source and additional information (https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript)
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}



// custom, specific rounding function
// works like Math.round by default
function roundTo(number, digitsAfterDot=0) {
    assert(digitsAfterDot >= 0, "Rounding to a negative amount of digits after decimal dot is not possible");
    let roundingFactor = 10 ** digitsAfterDot;
    return Math.round(number * roundingFactor) / roundingFactor;
}
