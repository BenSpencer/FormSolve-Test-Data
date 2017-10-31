// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then ((if (if input_bool('B2') then bool(input_string('S3')) else input_bool('B3')) then not(input_bool('B3')) else false) === not((input_string('S3') !== "YQb"))) else bool(str(input_bool('B2'))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn24 = Function('b10', 'b20', 's13', "var b9 = b20; var s8 = s13; var b7 = b10; var fn6 = function(b4, s2, b1) { var x5; if (b1) {  x5 = Boolean(s2); } else {  x5 = b4; } return x5; } var b11; if (b10) { b11 = false; } else { b11 = true; }var x12; if (fn6(b7, s8, b9)) { x12 = b11; } else { x12 = false; }var e16 = \"(s13 !== \\\"YQb\\\")\";var b18 = x12; var b19 = !(eval(e16));var x23; if (true) { x23 = b18 === b19; } else { var s21 = '' + (b20); x23 = !!(s21); } return x23;");
fn24(input_B3, input_B2, input_S3);
