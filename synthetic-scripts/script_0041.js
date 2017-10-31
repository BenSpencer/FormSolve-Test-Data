// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(input_bool('B3'))) then bool((if bool(input_int('I2')) then input_int('I2') else input_int('I3'))) else bool((if input_bool('B3') then str(input_bool('B1')) else input_string('S1'))))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn19(s13, b1, x7, x4, b11) {
    var b10 = b1;
    var x15;
    if (b10) {
        var s12 = (b11).toString();
        x15 = s12;
    } else {
        x15 = eval("s13");
    }
    var e16 = "x15";
    var b17 = (eval(e16)) ? true : false;
    var x18;
    if (!(!(b1))) {
        var x6 = x4;
        var x8;
        if ( !! (x4)) {
            x8 = x6;
        } else {
            x8 = x7;
        }
        var b9 = !! (x8);
        x18 = b9;
    } else {
        x18 = b17;
    }
    return x18;
}
fn19(input_S1, input_B3, input_I3, input_I2, input_B1);
