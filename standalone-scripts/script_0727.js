// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if ((int(bool(int(input_bool('B1')))) + input_int('I3')) <= input_int('I2')) then bool(str(bool((if bool(input_string('S3')) then (len(input_string('S1')) * int(input_bool('B3'))) else int((input_string('S2') !== "O")))))) else (input_string('S3') != str(bool(input_string('S1'))))) then input_string('S1') else input_string('S2'))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn37 = function (x5, s14, s12, b1, x8, b16, s21) {
    var s30 = s12;
    var s31 = s14;
    var e11 = "var b3 = (Number(b1)) ? true : false;x6 = ~~(b3); x7 = x5;var b9 = x6 + x7 <= x8;b9";
    x19 = (s14).length;
    x20 = eval("var x17 = Number(b16);x17");
    var x25;
    if ( !! (s12)) {
        x25 = x19 * x20;
    } else {
        var b22 = s21;
        var b23 = "O";
        var x24 = ~~ (b22 !== b23);
        x25 = x24;
    }
    var s28 = String(eval("!!(x25)"));
    var b29 = (s28) ? true : false;
    var x36;
    if (eval(e11)) {
        x36 = b29;
    } else {
        var b32 = !! (s31);
        var s33 = '' + (b32);
        x36 = (s30 != s33);
    }
    return x36;
}
var fn48 = Function('b43', 'b41', 'x42', 's40', 'x38', 's39', 's44', "var s46 = s44; var s45 = s39; var x47; if (fn37(x38, s39, s40, b41, x42, b43, s44)) { x47 = s45; } else {  x47 = s46; } return x47;");
fn48(input_B3, input_B1, input_I2, input_S3, input_I3, input_S1, input_S2);
