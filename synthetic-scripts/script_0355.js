// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((input_string('S2') == str(input_bool('B1')))) != int(not((input_string('S1') !== input_string('S3'))))) then int(((bool((int(str(bool(int(input_bool('B1'))))) % (1 - input_int('I3')))) == (if input_bool('B3') then bool(input_string('S2')) else input_bool('B2'))) == (input_string('S3') != input_string('S2')))) else 6)

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn46(s8, s1, x23, b34, s38, b16, b31) {
    var s9 = s38;
    var b2 = b16;
    var s32 = s1;
    var b4 = s1 == String(b2);
    var x6 = (b4) ? 1 : 0;
    var b14 = eval("x6");
    var b15 = (!((s8 !== s9))) | 0;
    var s39 = s32;
    var x17 = Number(b16);
    var e20 = "'' + ((x17) ? true : false)";
    x27 = Number(eval("eval(e20)"));
    x28 = eval("(1 - x23)");
    var b33 = !! (s32);
    var x35;
    if (b31) {
        x35 = b33;
    } else {
        x35 = b34;
    }
    var b36 = eval("(x27 % x28) ? true : false") == x35;
    var b42;
    if (b36) {
        b42 = (s38 != s39);
    } else {
        b42 = !(s38 != s39);
    }
    var x45;
    if (b14 != b15) {
        x45 = ~~ (b42);
    } else {
        x45 = 6;
    }
    return x45;
}
fn46(input_S1, input_S2, input_I3, input_B2, input_S3, input_B1, input_B3);
