// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((len(str(len(str(int((bool(str(input_int('I3'))) !== not(bool(int(input_bool('B2')))))))))) != input_int('I3')) || (input_bool('B3') || bool(int(not(bool(input_int('I2'))))))) then int(bool(int(input_string('S2')))) else input_int('I2'))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn41(s32, x1, b22, x23, b5) {
    var x38 = x23;
    var x18 = x1;
    var b4 = Boolean(eval("var s2 = '' + (x1);s2"));
    var e6 = "b5";
    var x7 = +(eval(e6));
    var e8 = "x7";
    var b9 = (eval(e8)) ? true : false;
    var b10;
    if (b9) {
        b10 = false;
    } else {
        b10 = true;
    }
    var b11;
    if (b4 !== b10) {
        b11 = true;
    } else {
        b11 = false;
    }
    var s14 = (+(b11)).toString();
    var l15 = (s14).length;
    var s16 = (l15).toString();
    var l17 = (s16).length;
    var e19 = "x18";
    var b24 = !! (x23);
    var b25 = !(b24);
    var b27 = ((b25) ? 1 : 0) ? true : false;
    var b28 = false;
    if (b22 || b27) {
        b28 = true;
    }
    var b30 = (l17 != eval(e19)) || b28;
    return (b30 ? eval("var e33 = \"s32\";var x34 = parseInt(eval(e33), 10);var b35 = (x34) ? true : false;(b35) ? 1 : 0") : eval("x38"));
}
fn41(input_S2, input_I3, input_B3, input_I2, input_B2);
