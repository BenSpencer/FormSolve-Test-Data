// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') && (input_int('I2') > len(str((len(input_string('S3')) != input_int('I2')))))) then len(str((str((if (input_string('S2') !== str(bool(input_string('S1')))) then (input_bool('B1') || bool(input_int('I1'))) else bool(int(bool(input_string('S3')))))) >= input_string('S3')))) else int(str(input_bool('B3'))))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

(function (x2, b23, b1, x24, s16, s18, s29) {
    var s4 = s29;
    var b43 = b1;
    var x6 = x2;
    var b7 = (s4).length;
    var b8 = x6;
    var b11 = eval("x2");
    var b12 = ((b7 != b8).toString()).length;
    var s37 = s29;
    var e36 = "var e17 = \"s16\";var b21 = eval(e17); var b22 = String(Boolean(s18));var e28 = \"var b26 = false; if (b23 || Boolean(x24)) { b26 = true; }b26\";var x34; if (b21 !== b22) { x34 = eval(e28); } else { var x31 = (!!(s29)) ? 1 : 0;var e32 = \"x31\"; x34 = (eval(e32)) ? true : false; }var s35 = '' + (x34);s35";
    var b39 = eval(e36);
    var b40 = eval("s37");
    var l42 = ('' + (b39 >= b40)).length;
    var x45 = Number((b43).toString());
    return ((b1 && eval("b11 > b12")) ? l42 : x45);
})(input_I2, input_B1, input_B3, input_I1, input_S2, input_S1, input_S3);
