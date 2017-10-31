// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_int('I3'))) then int(str((if bool(input_int('I3')) then (if input_bool('B1') then input_bool('B2') else input_bool('B3')) else (input_int('I2') <= input_int('I3'))))) else len(input_string('S1')))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn10 = Function('b6', 'b7', 'b8', "var x9; if (b6) {  x9 = b7; } else { x9 = b8; } return x9;");

function fn25(b11, x1, s22, b13, x14, b12) {
    var x15 = x1;
    var s2 = String(x1);
    var b3 = !! (s2);
    var x4 = x15;
    var b5 = (x4) ? true : false;
    var x18;
    if (b5) {
        x18 = fn10(b11, b12, b13);
    } else {
        var b16 = x14 <= x15;
        x18 = b16;
    }
    var e19 = "x18";
    var s20 = String(eval(e19));
    var x21 = parseInt(s20, 10);
    var x24;
    if (b3) {
        x24 = x21;
    } else {
        x24 = (s22).length;
    }
    return x24;
}
fn25(input_B1, input_I3, input_S1, input_B3, input_I2, input_B2);
