// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((input_int('I1') !== input_int('I2')))) then (if input_bool('B1') then not(bool(str(int((if (input_bool('B2') !== bool(len(input_string('S2')))) then input_string('S1') else str(input_int('I3'))))))) else false) else bool(str(not(input_bool('B2')))))

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn23 = Function('b11', 's18', 's12', 'x19', "var e17 = \"var b14 = Boolean((s12).length);var b15; if (b11 !== b14) { b15 = true; } else { b15 = false; }b15\";var e21 = \"'' + (x19)\";var x22; if (eval(e17)) {  x22 = s18; } else { x22 = eval(e21); } return x22;");

function fn39(b24, s26, x1, x27, s25, x2, b9) {
    var b33 = b24;
    var e6 = "var b3 = false; if (x1 !== x2) { b3 = true; }var e5 = \"b3\";eval(e5)";
    var b7 = !(eval(e6));
    var e10 = "b9";
    var x32;
    if (eval(e10)) {
        var b30 = Boolean('' + (Number(fn23(b24, s25, s26, x27))));
        x32 = !(b30);
    } else {
        x32 = false;
    }
    var b34 = !(b33);
    var e37 = "('' + (b34)) ? true : false";
    var x38;
    if (!(b7)) {
        x38 = x32;
    } else {
        x38 = eval(e37);
    }
    return x38;
}
fn39(input_B2, input_S2, input_I1, input_I3, input_S1, input_I2, input_B1);
