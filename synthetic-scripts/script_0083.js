// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((len(str(input_int('I3'))) === len(input_string('S3')))) then (if not(input_bool('B3')) then bool(str(input_bool('B3'))) else not(bool(((int(input_bool('B3')) * input_int('I2')) - input_int('I3'))))) else input_bool('B3'))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn30(b10, x1, s4, x18) {
    var b28 = b10;
    var x21 = x1;
    var e9 = "var s2 = String(x1);var l3 = (s2).length;var l5 = (s4).length;var b6; if (l3 === l5) { b6 = true; } else { b6 = false; }!(b6)";
    var b12 = b10;
    var b15 = b10;
    var b11 = !(b10);
    var s13 = String(b12);
    var b14 = Boolean(s13);
    var x17 = +(eval("b15"));
    var b24 = (((x17 * x18) - x21)) ? true : false;
    var b26;
    if (eval("b24")) {
        b26 = false;
    } else {
        b26 = true;
    }
    var x27;
    if (b11) {
        x27 = b14;
    } else {
        x27 = b26;
    }
    return (eval(e9) ? x27 : b28);
}
fn30(input_B3, input_I3, input_S3, input_I2);
