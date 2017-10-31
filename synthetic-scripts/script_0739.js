// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then (int(not((not(input_bool('B3')) != bool(input_string('S2'))))) == (if bool(str(len(input_string('S2')))) then input_int('I1') else len(str(int(input_bool('B2')))))) else bool(input_int('I3'))) then input_string('S3') else str(input_int('I2')))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn29 = function (s10, x22, b2, x26, b15, x14, b1, s25) {
    var s4 = s10;
    var b3 = !(b2);
    var b6;
    if (b3 != !! (s4)) {
        b6 = true;
    } else {
        b6 = false;
    }
    var b8 = !(b6);
    var l11 = (s10).length;
    var s12 = String(l11);
    var b13 = !! (s12);
    var x16 = ~~ (b15);
    var l18 = ((x16).toString()).length;
    var b20;
    if (~~(b8) == (b13 ? x14 : l18)) {
        b20 = true;
    } else {
        b20 = false;
    }
    var x24;
    if (b1) {
        x24 = b20;
    } else {
        x24 = !! (x22);
    }
    var x28;
    if (x24) {
        x28 = s25;
    } else {
        var s27 = String(x26);
        x28 = s27;
    }
    return x28;
}
fn29(input_S2, input_I3, input_B3, input_I2, input_B2, input_I1, input_B1, input_S3);
