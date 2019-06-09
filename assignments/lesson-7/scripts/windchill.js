// Input - get input and convert that string to an integer
let t = parseInt(document.getElementById('temperature').innerHTML);
let s = parseInt(document.getElementById('wind-speed').innerHTML);

// Processing - some random formula processing with the variable
let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));

// Output - round to one decimal and output string with HTML to innerHTML of a div
document.getElementById('wind-chill').innerHTML = f.toFixed(0);