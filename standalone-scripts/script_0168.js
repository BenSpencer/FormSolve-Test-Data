// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((bool(input_string('S2')) && not(input_bool('B3')))) then (int((input_string('S3') != str((int(str(not(bool(input_int('I2'))))) / input_int('I2'))))) == int(bool((if input_bool('B1') then int(bool((179 * input_int('I1')))) else input_int('I1'))))) else bool(str(input_bool('B2'))))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn41 = function (s9, b23, x10, b4, x24, s1, b37) {
    var b3 = Boolean(eval("s1"));
    var b5;
    if (b4) {
        b5 = false;
    } else {
        b5 = true;
    }
    var b6 = b3;
    var b7 = b5;
    var x16 = x10;
    var x15 = parseInt(eval("var b12; if ((x10) ? true : false) { b12 = false; } else { b12 = true; }'' + (b12)"), 10);
    var x30 = x24;
    var x29 = (Boolean(eval("(179 * x24)"))) ? 1 : 0;
    var x34 = (Boolean(eval("(b23 ? x29 : x30)"))) ? 1 : 0;
    var b35 = ~~ ((s9 != ((x15 / x16)).toString()));
    var b36 = x34;
    var x40;
    if (!(b6 && b7)) {
        x40 = b35 == b36;
    } else {
        var b39 = !! (String(b37));
        x40 = b39;
    }
    return x40;
}
fn41(input_S3, input_B1, input_I2, input_B3, input_I1, input_S2, input_B2);
