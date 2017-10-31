// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str(bool(len(str(not(input_bool('B2')))))) else str((((int(str((len(str(int(str(input_bool('B2'))))) >= input_int('I2')))) !== len(input_string('S2'))) || bool(int(str(int(str(bool(len(input_string('S3'))))))))) != (input_int('I2') > input_int('I3')))))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn46 = function (s21, b1, s25, b10, x39, x15) {
    var b3 = b10;
    var b4 = !(b3);
    var b7 = !! ((String(b4)).length);
    var x37 = x15;
    var b40 = false;
    if (eval("x37") > x39) {
        b40 = true;
    }
    var b42 = eval("var l22 = (s21).length;var b23; if (eval(\"var x12 = parseInt((b10).toString(), 10);var l14 = (String(x12)).length;var b16; if (l14 >= x15) { b16 = true; } else { b16 = false; }var x19 = parseInt((b16).toString(), 10);x19\") !== l22) { b23 = true; } else { b23 = false; }var e27 = \"(s25).length\";var b28 = (eval(e27)) ? true : false;var b34 = false; if (b23 || !!(parseInt((Number(String(b28))).toString(), 10))) { b34 = true; }b34") != b40;
    var s44 = String(b42);
    return (eval("b1") ? eval("'' + (b7)") : s44);
}
fn46(input_S2, input_B3, input_S3, input_B2, input_I3, input_I2);
